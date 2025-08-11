import { useLanguage } from "@/stores/useLanguage";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // ✳️ ראוטים עם רקע בהיר – כמו בניו-בר
  // עדיף לייצא/לייבא מקובץ משותף כדי לא לשכפל.
  const LIGHT_BG_ROUTES = new Set<string>([
    "/about",
    "/contact",
    "/portfolio",
    '/portfolio/branding',
    '/portfolio/print',
    '/portfolio/marketing',
    '/portfolio/mockups',
    "/designer-mentoring",
    "/business-guidance",
  ]);

  const isLightBgRoute = LIGHT_BG_ROUTES.has(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // כאשר הניו־בר עדיין שקוף למעלה + הדף בהיר → ורוד; אחרת → לבן
  const usePink = !scrolled && isLightBgRoute;

  const change = (lng: "he" | "en") => {
    setLang(lng);
    setOpen(false);
  };

  const btnClass = [
    "flex items-center gap-1 rounded px-2 py-1 text-lg font-medium transition-colors focus:outline-none",
    usePink
      ? "text-razzmatazz hover:bg-razzmatazz/10 focus:ring-2 focus:ring-razzmatazz/50"
      : "text-white-smoke hover:bg-white/10 focus:ring-2 focus:ring-white/40",
  ].join(" ");

  const chevronClass = usePink ? "text-razzmatazz" : "text-white-smoke";

  const panelClass = [
    "absolute z-50 mt-1 w-32 origin-top-right rounded-md border shadow-lg focus:outline-none rtl:right-0 ltr:left-0",
    usePink
      ? "bg-white text-razzmatazz border-razzmatazz/20"
      : "bg-english-violet/95 text-white border-white/20 backdrop-blur",
  ].join(" ");

  const optionBase =
    "block w-full px-3 py-1 text-left text-lg rounded transition-colors";

  const optActive = usePink
    ? "bg-razzmatazz/10 text-razzmatazz"
    : "bg-white/10 text-white";

  return (
    <div className="absolute left-16 inline-block text-left">
      <button
        onClick={() => setOpen((p) => !p)}
        className={btnClass}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language switcher"
      >
        {lang === "he" ? "עברית" : "English"}
        <ChevronDown className={`h-4 w-4 ${chevronClass}`} />
      </button>

      {open && (
        <ul className={panelClass} role="listbox">
          <li>
            <button
              className={`${optionBase} ${
                lang === "he" ? optActive : "hover:bg-black/5 hover:text-inherit"
              }`}
              onClick={() => change("he")}
              role="option"
            >
              עברית
            </button>
          </li>
          <li>
            <button
              className={`${optionBase} ${
                lang === "en" ? optActive : "hover:bg-black/5 hover:text-inherit"
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
