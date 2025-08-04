import React from 'react';
import {
  IoHomeOutline,
  IoVideocamOutline,
  IoCameraOutline,
  IoShareSocialOutline,
  IoHeartOutline,
} from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';

const menuItems = [
  {
    slug: 'print',
    title: 'Print',
    icon: <IoHomeOutline />,
    gradientFrom: '#a955ff',
    gradientTo: '#ea51ff',
  },
  {
    slug: 'branding',
    title: 'Branding',
    icon: <IoVideocamOutline />,
    gradientFrom: '#56CCF2',
    gradientTo: '#2F80ED',
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    icon: <IoCameraOutline />,
    gradientFrom: '#FF9966',
    gradientTo: '#FF5E62',
  },
  {
    slug: 'mockups',
    title: 'Mockups',
    icon: <IoShareSocialOutline />,
    gradientFrom: '#80FF72',
    gradientTo: '#7EE8FA',
  },
];
export default function GradientMenu() {
  const { cat } = useParams(); // נותן את הקטגוריה שב-URL

  function cn(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <nav className='flex justify-center mt-32 mb-10'>
      <ul className='flex gap-6'>
        {menuItems.map(({ slug, title, icon, gradientFrom, gradientTo }) => {
          const active = slug === cat;
          return (
            <li key={slug}>
              <Link
                to={`/portfolio/${slug}`}
                aria-current={active ? 'page' : undefined}
                style={
                  {
                    '--gradient-from': gradientFrom,
                    '--gradient-to': gradientTo,
                  } as React.CSSProperties & Record<string, string>
                }
                className={`
    relative flex items-center justify-center h-[60px] rounded-full cursor-pointer
    transition-all duration-500

    /* ✦ בסיס – כפתור קטן לבן */
    w-[60px] bg-white shadow-lg

    /* ✦ גדל + gradient כשמרחפים */
    hover:w-[180px] hover:shadow-none group

    /* ✦ גדל + gradient כש-active (אותו הדבר!) */
    ${active && 'w-[180px] shadow-none'}
  `}
              >
                {/* גרדיאנט רק בהובר (או במצב אקטיב) */}
                <span
                  className={cn(
                    'absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] transition-all duration-500',
                    active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  )}
                />
                {/* Blur glow */}
                <span
                  className={`
      absolute inset-0 rounded-full blur-[15px] -z-10
      bg-[linear-gradient(45deg,var(--from),var(--to))]
      transition-opacity duration-500
      opacity-0 group-hover:opacity-50
      ${active && 'opacity-50'}
    `}
                />
                {/* Icon */}
                <span
                  className={`
      relative z-10 text-2xl text-gray-500
      transition-transform duration-500
      group-hover:scale-0
      ${active && 'scale-0 text-white'}
    `}
                >
                  {icon}
                </span>
                {/* Title */}
                <span
                  className={cn(
                    'absolute z-10 uppercase tracking-wide text-sm transition-all duration-500',
                    active
                      ? 'text-white scale-100'
                      : 'scale-0 text-white group-hover:scale-100 delay-150'
                  )}
                >
                  {title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
