import { useState, useEffect } from 'react';
import { IoAccessibility } from 'react-icons/io5';
import clsx from 'clsx';

const OPTIONS = [
  {
    id: 'high-contrast',
    label: 'ניגודיות גבוהה',
    className: 'contrast-high'
  },
  {
    id: 'big-text',
    label: 'הגדלת טקסט',
    className: 'text-xl md:text-2xl'
  },
  {
    id: 'underline-links',
    label: 'קו תחתון לקישורים',
    className: 'underline-links'
  }
];

export const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [activeOptions, setActiveOptions] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('accessibility-options');
    if (saved) {
      const parsed = JSON.parse(saved);
      setActiveOptions(parsed);
      applyClasses(parsed);
    }
  }, []);

  const toggleOption = (id: string) => {
    const updated = activeOptions.includes(id)
      ? activeOptions.filter((opt) => opt !== id)
      : [...activeOptions, id];
    setActiveOptions(updated);
    localStorage.setItem('accessibility-options', JSON.stringify(updated));
    applyClasses(updated);
  };

  const applyClasses = (options: string[]) => {
    const html = document.documentElement;
    html.className = ''; // איפוס
    options.forEach((id) => {
      const opt = OPTIONS.find((o) => o.id === id);
      if (opt) html.classList.add(opt.className);
    });
  };

  return (
    <div className="fixed z-50 bottom-4 left-4 text-sm">
      <button
        className="bg-[#0848ca] text-white p-3 rounded-full shadow-lg hover:bg-[#052a76]"
        onClick={() => setOpen(!open)}
        aria-label="תפריט נגישות"
      >
        <IoAccessibility className="text-xl" />
      </button>
      {open && (
        <div className="mt-2 space-y-2 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          {OPTIONS.map((opt) => (
            <label key={opt.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={activeOptions.includes(opt.id)}
                onChange={() => toggleOption(opt.id)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
