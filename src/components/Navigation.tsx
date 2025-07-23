import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useLanguage } from "@/stores/useLanguage";
import LogoUrl from "@/assets/svg/F_logo.svg?url";




/**
 * Navigation component – fully bilingual.
 * All visible strings come from i18n keys.
*/
export default function Navigation() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang } = useLanguage()

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
    { key: 'nav.work', path: '/portfolio' },
    { key: 'nav.mentoring', path: '/designer-mentoring' },
    { key: 'nav.guidance', path: '/business-guidance' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-[84px] transition-all duration-300 ${
        scrolled
          ? 'bg-english-violet/90 backdrop-blur-md'
          : 'bg-gradient-to-b from-magenta-haze/5 to-non-photo-blue/5 backdrop-blur-sm'
      }`}
    >
      <div className='mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-full items-center justify-between'>
          {/* Logo */}
          <Link
            to='/'
            className={`text-2xl font-bold transition-all duration-300 ${
              scrolled
                ? 'scale-90 text-non-photo-blue'
                : 'scale-100 text-primary'
            }`}
          >
            <img
              src={LogoUrl}
              alt='Shir Adivi Design Logo'
              className='h-24 w-auto pt-4'
            />
          </Link>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Desktop nav */}
          <div className='hidden space-x-8 md:flex rtl:space-x-reverse'>
            {navItems.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                className={`group relative text-lg font-medium tracking-wide transition-all duration-300 hover:text-razzmatazz ${
                  isActive(path) ? 'text-razzmatazz' : 'text-foreground'
                }`}
                style={{ letterSpacing: '0.5px' }}
              >
                {t(key)}
                <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-razzmatazz transition-all duration-300 group-hover:w-full rtl:left-auto rtl:right-0'></span>
              </Link>
            ))}
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
