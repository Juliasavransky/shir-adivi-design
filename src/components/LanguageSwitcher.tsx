import { useLanguage } from "@/stores/useLanguage";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * LanguageSwitcher – כפתור בחירת שפה עם dropdown
 * שומר שפה ב‑localStorage ומעדכן Zustand + i18next + dir
 */
export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const change = (lng: "he" | "en") => {
    setLang(lng);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-1 rounded px-2 py-1 text-sm font-medium hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language switcher"
      >
        {lang === "he" ? "עברית" : "English"}
        <ChevronDown className="h-4 w-4" />
      </button>

      {open && (
        <ul
          className="absolute z-50 mt-1 w-28 origin-top-right rounded-md border bg-background shadow-lg focus:outline-none rtl:right-0 ltr:left-0"
          role="listbox"
        >
          <li>
            <button
              className={`block w-full px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground ${
                lang === "he" && "font-semibold text-razzmatazz"
              }`}
              onClick={() => change("he")}
              role="option"
            >
              עברית
            </button>
          </li>
          <li>
            <button
              className={`block w-full px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground ${
                lang === "en" && "font-semibold text-razzmatazz"
              }`}
              onClick={() => change("en")}
              role="option"
            >
              English
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
