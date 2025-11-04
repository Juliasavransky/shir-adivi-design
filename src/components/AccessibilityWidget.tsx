import { useState, useEffect } from 'react';
import {
FaUniversalAccess, FaFont, FaHighlighter, FaLink, FaMousePointer, FaRegEye,
FaUndoAlt, FaRegSun, FaRegMoon, FaLowVision
} from 'react-icons/fa';
import {
MdFormatLineSpacing, MdOutlineTextIncrease, MdOutlineTextDecrease
} from 'react-icons/md';
import { GiOpenBook } from 'react-icons/gi';
import { BsType } from 'react-icons/bs';
import clsx from 'clsx';


interface Option {
id: string;
label: string;
icon: JSX.Element;
className?: string;
}


const OPTIONS: Option[] = [
{ id: 'font-increase', label: 'הגדלת גופן', icon: <MdOutlineTextIncrease /> },
{ id: 'font-decrease', label: 'הקטנת גופן', icon: <MdOutlineTextDecrease /> },
{ id: 'bold-font', label: 'משקל פונט', icon: <FaFont />, className: 'font-bold' },
{ id: 'highlight-titles', label: 'הדגש כותרות', icon: <FaHighlighter />, className: 'highlight-titles' },
{ id: 'underline-links', label: 'הדגש קישורים', icon: <FaLink />, className: 'underline-links' },
{ id: 'big-cursor', label: 'סמן גדול', icon: <FaMousePointer />, className: 'cursor-big' },
{ id: 'high-contrast', label: 'ניגודיות גבוהה', icon: <FaRegMoon />, className: 'contrast-high' },
{ id: 'low-contrast', label: 'ניגודיות בהירה', icon: <FaRegSun />, className: 'contrast-low' },
{ id: 'reduce-motion', label: 'עצור אנימציות', icon: <FaRegEye />, className: 'reduce-motion' },
{ id: 'dyslexic-font', label: 'פונט דיסלקטים', icon: <GiOpenBook />, className: 'font-dyslexic' },
{ id: 'dalton-colors', label: 'צבעים לעיוורי צבעים', icon: <FaLowVision />, className: 'dalton-colors' },
];


export const AccessibilityWidget = () => {
const [open, setOpen] = useState(false);
const [activeOptions, setActiveOptions] = useState<string[]>([]);
const [fontScale, setFontScale] = useState(100);


useEffect(() => {
const saved = localStorage.getItem('accessibility-options');
if (saved) {
const parsed = JSON.parse(saved);
setActiveOptions(parsed.active || []);
setFontScale(parsed.fontScale || 100);
applyClasses(parsed.active || [], parsed.fontScale || 100);
}
}, []);


const toggleOption = (id: string) => {
let updated = [...activeOptions];
if (updated.includes(id)) {
updated = updated.filter((opt) => opt !== id);
} else {
updated.push(id);
}
setActiveOptions(updated);
persist(updated, fontScale);
applyClasses(updated, fontScale);
};


const changeFontScale = (amount: number) => {
const newScale = Math.min(200, Math.max(50, fontScale + amount));
setFontScale(newScale);
persist(activeOptions, newScale);
applyClasses(activeOptions, newScale);
};


const resetAll = () => {
setActiveOptions([]);
setFontScale(100);
persist([], 100);
applyClasses([], 100);
};


const persist = (options: string[], scale: number) => {
localStorage.setItem('accessibility-options', JSON.stringify({ active: options, fontScale: scale }));
};


const applyClasses = (options: string[], scale: number) => {
const html = document.documentElement;
html.className = '';
options.forEach((id) => {
const opt = OPTIONS.find((o) => o.id === id);
if (opt?.className) html.classList.add(opt.className);
});
html.style.setProperty('--font-scale', `${scale}%`);
};

  return (
    <div className="fixed z-50 bottom-4 rtl:right-4 ltr:left-4 text-sm">
      <button
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        onClick={() => setOpen(!open)}
        aria-label="תפריט נגישות"
      >
        <FaUniversalAccess className="text-xl" />
      </button>

      {open && (
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-4 bg-white shadow-xl rounded-xl p-4 w-80 border border-gray-200">
          <div className="col-span-2 sm:col-span-3 text-center font-bold">התאמות טקסט</div>
          <button onClick={() => changeFontScale(-10)} className="p-2 bg-gray-100 rounded text-xl">−</button>
          <div className="text-center flex items-center justify-center">{fontScale}%</div>
          <button onClick={() => changeFontScale(10)} className="p-2 bg-gray-100 rounded text-xl">+</button>

          {OPTIONS.map((opt) => (
            <button
              key={opt.id}
              className={clsx(
                'flex flex-col items-center justify-center p-3 rounded bg-gray-100 hover:bg-gray-200 transition text-center text-xs',
                activeOptions.includes(opt.id) && 'ring-2 ring-blue-500 bg-blue-50'
              )}
              onClick={() => toggleOption(opt.id)}
            >
              <div className="text-xl mb-1">{opt.icon}</div>
              <div>{opt.label}</div>
            </button>
          ))}

          <button
            onClick={resetAll}
            className="col-span-2 sm:col-span-3 mt-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-bold"
          >
            איפוס הגדרות
          </button>
        </div>
      )}
    </div>
  );
};
