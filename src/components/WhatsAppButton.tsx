import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import clsx from 'clsx';

export const WhatsAppButton = () => {
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // בודק אם הדף ב-RTL כדי להציב את הכפתור בצד המתאים
    setIsRTL(document.documentElement.dir === 'rtl');
  }, []);

  return (
    <div
      className={clsx(
        'sticky z-40', // משתלב בתוך ה-layout
        'bottom-16', // תמיד בתחתית
        isRTL ? 'left-6' : 'right-6' // מיקום לפי שפה
      )}
    >
      <a
        href='https://wa.me/+972544809544'
        target='_blank'
        rel='noopener noreferrer'
        aria-label="צ'אט בוואטסאפ"
        className={clsx(
          ' flex items-center justify-center animate-bounce ',
          'w-14 h-14 md:w-16 md:h-16 rounded-full',
          'bg-green-500 hover:bg-green-600 text-white shadow-lg',
          'transition-all duration-1000',
          isRTL ? 'left-16' : 'right-16',
          'bottom-8 md:bottom-8'
        )}
      >
        <FaWhatsapp className='text-3xl md:text-4xl ' />
      </a>
    </div>
  );
};
