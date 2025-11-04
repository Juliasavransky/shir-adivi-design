import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/stores/useLanguage';
import LogoUrl from '@/assets/svg/F_logo.svg?url';

/**
 * Navigation component – fully bilingual.
 * All visible strings come from i18n keys.
 */
export default function Navigation() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang } = useLanguage();

  // Change <html dir> when language changes
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'he' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items defined once, translated on render
  const navItems = [
    { key: 'Portfolio', path: '/portfolio' },
    { key: 'Mentoring', path: '/designer-mentoring' },
    { key: 'Guidance', path: '/business-guidance' },
    { key: 'About', path: '/about' },
    { key: 'Contact', path: '/contact' },
  ];

const isActive = (path: string) => {
  const cur = location.pathname;
  if (path === "/portfolio") {
    return cur === path || cur.startsWith(path + "/");
  }
  return cur === path;
};
  const onTop = !scrolled;

  // Routes whose page background is LIGHT (לבן/בהיר)
  const LIGHT_BG_ROUTES = new Set<string>([
    '/about',
    '/contact',
    '/portfolio',
    '/portfolio/branding',
    '/portfolio/print',
    '/portfolio/marketing',
    '/portfolio/mockups',
    '/designer-mentoring',
    '/business-guidance',
    // הוסיפי/הסירי לפי האתר שלך
  ]);

  const isLightBgRoute = LIGHT_BG_ROUTES.has(location.pathname);

  // אם גוללים – הטקסט תמיד בהיר על הסגול; אם לא – ורוד על רקע לבן, לבן על רקע צבעוני
  const navTextClass = scrolled
    ? 'text-slate-100 hover:text-white'
    : isLightBgRoute
    ? 'text-razzmatazz hover:text-razzmatazz/80'
    : 'text-white-smoke hover:text-moonstone';

  const underlineClass = scrolled
    ? 'bg-white/90'
    : isLightBgRoute
    ? 'bg-razzmatazz'
    : 'bg-moonstone';

  // שדרוג לאקטיב: צבע + גודל
  const activeTextClass = scrolled
    ? 'text-white'
    : isLightBgRoute
    ? 'text-razzmatazz'
    : 'text-white';

    // בסיס (לא-אקטיב) קטן יותר; אקטיב גדול יותר
const baseSize = "text-lg md:text-xl";
const activeSize = "text-xl md:text-2xl"; // בולט יותר
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-[84px] transition-all duration-300 ${
        scrolled
          ? '  bg-english-violet/90 shadow-md backdrop-blur-md'
          : 'bg-gradient-to-b from-magenta-haze/5 to-non-photo-blue/5 backdrop-blur-sm bg-transparent '
      }`}
    >
      <div className='mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8 '>
        <div className='flex h-full items-center justify-between '>
          {/* Logo */}
          <Link
            to='/'
            aria-label='Home'
            className={`text-2xl  font-bold transition-all duration-300 relative
              ${
                scrolled
                  ? 'scale-90 text-non-photo-blue'
                  : 'scale-100 text-primary'
              }`}
          >
            <span
              className={`absolute inset-2 rounded-t-full rounded-b-full transition
              ${onTop ? 'bg-white/40' : 'bg-white/40'}
              backdrop-blur-md `}
              aria-hidden
            ></span>
            <img
              src={LogoUrl}
              alt='Shir Adivi Design Logo'
              className='relative h-24 w-auto pt-4 '
            />
          </Link>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Desktop nav */}
       <div className="hidden md:flex rtl:space-x-reverse space-x-8">
  {navItems.map(({ key, path }) => {
    const active = isActive(path);
    return (
      <Link
        key={key}
        to={path}
        aria-current={active ? "page" : undefined}
        className={[
          "group relative tracking-wide transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-razzmatazz/60 rounded-sm",
          active ? `${activeTextClass} ${activeSize} font-semibold`
                 : `${navTextClass} ${baseSize}`
        ].join(" ")}
        style={{ letterSpacing: "0.5px" }}
      >
        {t(key)}
        <span
          className={[
            "absolute -bottom-1 left-0 h-0.5 transition-all duration-300 rtl:left-auto rtl:right-0",
            underlineClass,
            active ? "w-full" : "w-0 group-hover:w-full"
          ].join(" ")}
        />
      </Link>
    );
  })}
</div>


          {/* Mobile toggle */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile drawer */}
        {isOpen && (
          <div className='absolute left-0 right-0 top-full bg-background/95 pb-4 backdrop-blur-md md:hidden rtl:text-right'>
            <div className='flex flex-col space-y-2 px-4'>
              {navItems.map(({ key, path }) => (
                <Link
                  key={key}
                  to={path}
                  className={`block px-3 py-2 text-lg font-medium transition-colors hover:text-razzmatazz ${
                    isActive(path)
                      ? 'bg-razzmatazz/5 text-razzmatazz'
                      : 'text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {t(key)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
