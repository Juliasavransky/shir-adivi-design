import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { useLanguage } from '@/stores/useLanguage';
import { BrandMarquee } from './../components/BrandMarquee';
import heroPortrait from '@/assets/images/Portrait.jpg';
import bgUrl from '@/assets/svg/bg.svg';

type Position = 'front' | 'middle' | 'back';

export const Home = () => {
  const { lang } = useLanguage();

  return (
    <div className='min-h-screen pt-[84px]'>
      {/* רקע סטטי */}
      <div
        className='absolute inset-0 z-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${bgUrl})` }}
      />

      {/* Hero Section */}
      <section className='relative h-[90vh] flex items-center overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full'>
          {/* Left Column */}
          <div className='relative lg:col-span-6 flex flex-col justify-center space-y-6 p-10 sm:p-16 md:p-20 bg-white/10 backdrop-blur-md rounded-[40%_70%_60%_40%_/_70%_40%_60%_40%] clip-path-[polygon(67%_3%,87%_15%,96%_36%,96%_66%,82%_89%,60%_98%,33%_97%,12%_85%,3%_64%,4%_33%,18%_13%,41%_3%)] h-full'>
            <div className='space-y-6 sm:space-y-8'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-magenta-dye'>
                Where products become brands
              </h1>
              <p className='text-base sm:text-lg md:text-xl text-english-violet/80 max-w-lg leading-relaxed'>
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

          {/* Right Column */}
          <div className='lg:col-span-6 flex justify-center items-center h-full'>
            <div className='relative w-full max-w-md h-[90%] overflow-hidden shadow-lg rounded-[40%_70%_60%_40%_/_70%_40%_60%_40%]'>
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
      <div className='h-16 bg-gradient-to-r from-sage to-moss-green'></div>
    </div>
  );
};
