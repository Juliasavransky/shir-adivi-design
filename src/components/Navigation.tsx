import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/stores/useLanguage';
import LogoUrl from '@/assets/svg/F_logo.svg?url';

export default function Navigation() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'he' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'Portfolio', path: '/portfolio' },
    { key: 'Mentoring', path: '/designer-mentoring' },
    { key: 'Guidance', path: '/business-guidance' },
    { key: 'About', path: '/about' },
    { key: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    const cur = location.pathname;
    if (path === '/portfolio') {
      return cur === path || cur.startsWith(path + '/');
    }
    return cur === path;
  };

  const LIGHT_BG_ROUTES = new Set([
    '/about',
    '/contact',
    '/portfolio',
    '/portfolio/branding',
    '/portfolio/print',
    '/portfolio/marketing',
    '/portfolio/mockups',
    '/designer-mentoring',
    '/business-guidance',
  ]);

  const isLightBgRoute = LIGHT_BG_ROUTES.has(location.pathname);

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

  const activeTextClass = scrolled
    ? 'text-white'
    : isLightBgRoute
    ? 'text-razzmatazz'
    : 'text-white';

  const baseSize = 'text-sm sm:text-base lg:text-lg';
  const activeSize = 'text-base sm:text-lg lg:text-xl';

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled
          ? 'bg-english-violet/90 shadow-md backdrop-blur-md'
          : 'bg-gradient-to-b from-magenta-haze/5 to-non-photo-blue/5 backdrop-blur-sm'
      }`}
    >
      <div className='mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
        {/* logo +  LanguageSwitcher */}
        <div
          className={`flex min-w-60 justify-end items-center gap-2 sm:gap-4 ${
            i18n.language === 'he' ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          <LanguageSwitcher />
          <Link
            to='/'
            aria-label='Home'
            className={`relative transition-all duration-300  rounded-full backdrop-blur-md'
                aria-hidden ${
              scrolled
                ? 'scale-90 text-non-photo-blue'
                : 'scale-100 text-primary'
            }`}
          >
            <img
              src={LogoUrl}
              alt='Shir Adivi Design Logo'
              className='relative h-10 sm:h-20 w-auto pt-3'
              />
          </Link>
        </div>

        <div className='hidden md:flex items-center gap-4 lg:gap-8 rtl:space-x-reverse'>
          {navItems.map(({ key, path }) => {
            const active = isActive(path);
            return (
              <Link
                key={key}
                to={path}
                aria-current={active ? 'page' : undefined}
                className={`group relative transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-razzmatazz/60 rounded-sm ${
                  active
                    ? `${activeTextClass} ${activeSize} font-semibold`
                    : `${navTextClass} ${baseSize}`
                }`}
                style={{ letterSpacing: '0.5px' }}
              >
                {t(key)}
                <span
                  className={`absolute -bottom-1 left-0 rtl:left-auto rtl:right-0 h-0.5 transition-all duration-300 ${underlineClass} ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className='md:hidden'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className='absolute inset-x-0 top-full z-40 bg-background/95 py-4 backdrop-blur-md md:hidden rtl:text-right'>
          <div className='flex flex-col items-start gap-3 px-4'>
            {navItems.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                className={`w-full px-3 py-2 text-base font-medium transition-colors ${
                  isActive(path)
                    ? 'bg-razzmatazz/10 text-razzmatazz font-semibold'
                    : 'text-foreground hover:text-razzmatazz'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {t(key)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
