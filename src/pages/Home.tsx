import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { useLanguage } from '@/stores/useLanguage';
import { BrandMarquee } from './../components/BrandMarquee';
import TestimonialCard from '@/components/Testimonial';
import testimonials from '@/assets/jsonLists/testimonials.json';

import heroPortrait from '@/assets/images/Portrait.jpg';
import bgUrl from '@/assets/svg/bg.svg';
import lineOfBottles from '@/assets/images/line of bottles.jpg';
import hacaremCatalog from '@/assets/images/hacarem-catalogue.jpg';
import cafeCups1 from '@/assets/images/cafe-cups1.png';
import cafeCups2 from '@/assets/images/cafe-cups2.png';
import babySoft from '@/assets/images/baby-soft.jpg';
import ilanitBrend from '@/assets/images/ilanit-branding.jpg';

type Position = 'front' | 'middle' | 'back';

export const Home = () => {
  const { lang } = useLanguage();
  const [positions, setPositions] = useState<Position[]>([
    'front',
    'middle',
    'back',
  ]);
  type Dir = 'next' | 'prev';

  const handleShuffle = (dir: Dir) => {
    setPositions((prev) => {
      const p = [...prev];
      return dir === 'next'
        ? (p.unshift(p.pop()!), p) // שמאלה → קלף הבא
        : (p.push(p.shift()!), p); // ימינה → קלף קודם
    });
  };

  return (
    <div className='min-h-screen pt-[84px]'>
      {/* רקע סטטי */}

      <div
        className='absolute inset-0 z-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${bgUrl})` }}
      />

      {/* Hero Section */}
      <section className='relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-sage/10 to-non-photo-blue/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
          {/* Left Column - 55% */}
          <div
            className='
    relative lg:col-span-6 flex flex-col justify-center space-y-6
     p-20 shadow-lg
    bg-white/10 backdrop-blur-md
    rounded-[40%_70%_60%_40%_/_70%_40%_60%_40%]
    clip-path-[polygon(
      67%_3%,87%_15%,96%_36%,96%_66%,
      82%_89%,60%_98%,33%_97%,12%_85%,
      3%_64%,4%_33%,18%_13%,41%_3%)
    ]
  '
          >
            <div className='lg:col-span-7 space-y-8'>
              <h1 className='text-5xl md:text-7xl font-extrabold leading-tight text-magenta-dye'>
                Where products become brands{' '}
              </h1>

              <p className='text-xl md:text-2xl text-english-violet/80 max-w-lg leading-relaxed'>
                A design studio that shines a light on what you offer so
                customers can’t look away.
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  asChild
                  size='lg'
                  className='bg-razzmatazz hover:bg-razzmatazz/90 text-white group rounded-full px-8'
                >
                  <Link to='/portfolio'>
                    View Portfolio
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='border-moonstone text-moonstone hover:bg-moonstone hover:text-white rounded-full px-8'
                >
                  <a
                    href='https://wa.me/+972544809544'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Phone className='mr-2 h-4 w-4' />
                    Book a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - 45% */}
          <div className='lg:col-span-5 relative'>
            <div
              className='relative w-full h-96 md:h-[500px] overflow-hidden shadow-lg
            mask-type-alpha
              rounded-[40%_70%_60%_40%_/_70%_40%_60%_40%]
               '
            >
              <img
                src={heroPortrait}
                alt='Shir Adivi - Graphic Designer'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-english-violet/20 to-transparent'></div>
            </div>
          </div>
        </div>
      </section>

      <BrandMarquee />

      {/* Torn Edge Divider */}
      <div className='h-16 bg-gradient-to-r from-sage to-moss-green relative'>
        <div className='absolute inset-0 bg-gradient-to-r from-sage to-moss-green'></div>
      </div>

      <section className='px-4 py-16 bg-white'>
        <div
          className='
          mx-auto max-w-6xl
          grid  gap-6
          sm:grid-cols-2 md:grid-cols-4
        '
        >
          {/* 1 — bottles title card */}
          <article className='col-span-2 row-span-1 flex items-center justify-center rounded-2xl p-4 font-bold text-white bg-[#5C2D91]'>
            <a href='/portfolio/marketing'>
              <img
                src={lineOfBottles}
                alt='Line of Bottles'
                className='w-full rounded-xl shadow transition-transform hover:scale-105'
              />
            </a>
          </article>

          {/* 2 — Abstract shape */}
          <div
            className='
            aspect-square rounded-2xl shadow-sm
            bg-cover bg-center
          '
            style={{ backgroundImage: `url(${bgUrl})` }}
          />

          {/* 3 — Pumpkin product (tall) */}
          <article className='col-span-1 row-span-2 flex flex-col items-center justify-end overflow-hidden rounded-2xl bg-[#FEEEDE] p-4'>
            <a href='/portfolio/branding'>
              <h3 className='text-lg font-bold'>I'm Shir Adivi,</h3>
              <p className='text-sm leading-relaxed text-gray-700 mb-2'>
                a senior graphic designer
                <br />
                with over 10&nbsp;years of experience
              </p>
              <img
                src={ilanitBrend}
                alt='Pumpkin poster'
                className='w-full rounded-xl shadow transition-transform hover:scale-105'
              />
            </a>

            <h3 className='text-lg font-bold mt-12'>I'm Shir Adivi,</h3>
            <p className='text-sm leading-relaxed text-gray-700 mb-2'>
              a senior graphic designer
              <br />
              building impactful brands.
            </p>
            <a href='/portfolio/print'>
              <img
                src={babySoft}
                alt='Pumpkin poster'
                className='w-full rounded-xl shadow transition-transform hover:scale-105'
              />
            </a>

            <p className='mt-4 text-center text-sm font-medium text-gray-700'>
              BABY-SOFT <span className='font-light'>Branding poster</span>
            </p>
          </article>
          {/* 6 — Big mentoring card */}
          <article className='col-span-3 row-span-1 flex flex-col justify-between rounded-2xl bg-white/80 p-8 shadow'>
            <a href='/business-guidance'>
              <h2 className='text-2xl font-extrabold leading-snug text-gray-900 md:text-3xl'>
                Refine your skills and grow your design career with personalized
                mentoring&nbsp;for creatives.
              </h2>

              <ul className='mt-6 space-y-2 text-sm'>
                <li>
                  <span className='font-semibold'>Starter Tier</span> – Monthly
                  coaching sessions
                </li>
                <li>
                  <span className='font-semibold'>Pro Tier</span> – Weekly
                  mentoring + priority support
                </li>
                <li>
                  <span className='font-semibold'>Master Tier</span> – All day
                  coaching intensive
                </li>
              </ul>
            </a>
          </article>

          {/* 4 — Intro profile */}
          <article className='flex flex-col gap-4 rounded-2xl bg-[#E6EBF7] p-6'>
            <a href='/portfolio/branding'>
              <img
                src={hacaremCatalog}
                alt='Shir Adivi'
                className='rounded-2xl object-cover shadow-lg'
              />
              <h3 className='text-lg font-bold'>Catalog Ha Carmel</h3>
              <p className='text-sm leading-relaxed text-gray-700'>
                a senior graphic designer
                <br />
                with over 10&nbsp; years of experience
                <br />
                building impactful brands.
              </p>
              <p className='text-sm leading-relaxed text-gray-700'>
                a senior graphic designer
                <br />
                with over 10&nbsp; years of experience
                <br />
                building impactful brands.
              </p>
            </a>
          </article>

          {/* 5 — Orange brand */}
          <article className='flex flex-col gap-2 rounded-2xl bg-[#0F2B46] p-4 text-white'>
            <a href='/portfolio/print'>
              <div className=' relative bg-non-photo-blue/70  shadow-xl backdrop-blur-md  rounded-2xl '>
                <img
                  src={cafeCups1}
                  alt='Orange Juice'
                  className='rounded-xl shadow '
                />
                <img
                  src={cafeCups2}
                  alt='Orange Juice'
                  className='rounded-xl shadow'
                />
                <img
                  src={cafeCups1}
                  alt='Orange Juice'
                  className='rounded-xl shadow'
                />
              </div>
              <h4 className='font-bold'>Ilans Cafe Cups </h4>
              <p className='text-sm'>
                Juice brand identity
                <br />
                and packaging design
              </p>
            </a>
          </article>

          {/* 7 — Hand-written CTA */}
          <Link
            to='/contact'
            className='col-span-2 row-span-2 flex flex-col items-center justify-center'
          >
            <p className='font-handwriting text-6xl md:text-5xl text-magenta-dye whitespace-nowrap'>
              Get in touch!
            </p>

            {/* SVG תקין ללא הערות - כיתבו בשורה אחת או השתמשו בשברים */}
            <svg
              viewBox='0 0 120 10'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className=' h-16 w-44 text-magenta-dye'
              aria-hidden
            >
              {/* קו אופקי + חץ */}
              <path
                d='  M0 10                Q60 24 100 10         M92 2 L120 10 L92 18'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </div>

        {/* 8 — testimonials card */}
        <div className='grid place-content-center  px-8 py-24 text-slate-50 min-h-screen h-full w-full'>
          <div className='relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]'>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                handleShuffle={handleShuffle}
                position={positions[index]}
              />
            ))}
          </div>
        </div>
      </section>

  
    </div>
  );
};
