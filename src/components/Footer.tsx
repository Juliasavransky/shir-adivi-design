import { Link } from 'react-router-dom';
import { useLanguage } from '@/stores/useLanguage';
import webWitchLogoUrl from '@/assets/svg/webWitchLogo yellow.svg';
import { PopUp } from '../components/PopUp';
import { useState } from 'react';

export const Footer = () => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className='bg-english-violet text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Brand */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>Shir Adivi</h3>
            <p className='text-white/80 leading-relaxed'>
              Senior Graphic Designer with 20+ years of experience in branding,
              print, and marketing design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <div className='space-y-2'>
              <Link
                to='/portfolio'
                className='block text-white/80 hover:text-white transition-colors'
              >
                Portfolio
              </Link>
              <Link
                to='/about'
                className='block text-white/80 hover:text-white transition-colors'
              >
                About
              </Link>
              <Link
                to='/contact'
                className='block text-white/80 hover:text-white transition-colors'
              >
                Contact
              </Link>
              <Link
                to='/designer-mentoring'
                className='block text-white/80 hover:text-white transition-colors'
              >
                Mentoring
              </Link>
              <Link
                to='/business-guidance'
                className='block text-white/80 hover:text-white transition-colors'
              >
                Guidance
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Connect</h4>
            <div className='space-y-2 text-white/80'>
              <p>Graphic Design Studio</p>
              <p>Brand Identity & Marketing</p>
              <p>Available for new projects</p>
              <button
                className='block hover:text-white cursor-pointer text-right'
                onClick={() => setIsOpen(true)}
              >
                Privacy Policy
              </button>
              <PopUp
                open={isOpen}
                onOpenChange={setIsOpen}
                contentType='policy'
              />
            </div>
          </div>
        </div>

        <div className='border-t border-white/20 mt-8 pt-8 text-center text-white/60'>
          <p>
            &copy; {new Date().getFullYear()} Shir Adivi. All rights reserved.
          </p>
          <Link
            to='https://www.webwitch.click/he/home'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white flex items-center justify-center '
          >
            Designed and developed by
            <img
              src={webWitchLogoUrl}
              alt='Web_Witch Design Logo'
              className='relative h-24 w-auto pt-4 '
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
