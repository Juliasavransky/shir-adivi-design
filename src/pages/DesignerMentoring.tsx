import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/stores/useLanguage';

export const DesignerMentoring = () => {
  const { lang } = useLanguage();
  return (
    <div className='relative min-h-screen py-20 bg-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12'>
        {/* Text Section */}
        <div className='w-full lg:w-1/2 z-10'>
          <Card className='p-6 sm:p-10 md:p-12 bg-gradient-to-r from-accent/5 to-secondary/5 border-none'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-handwriting font-bold mb-4'>
              Coming Soon
            </h1>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6'>
              Designer Mentoring
            </h2>

            <p className='text-sm sm:text-base md:text-lg text-muted-foreground mb-6'>
              One-on-one mentorship for aspiring designers looking to build their portfolio,
              develop their skills, and advance their careers in graphic design.
            </p>

            <p className='text-xs sm:text-sm text-muted-foreground mb-6'>
              This mentoring program will offer personalized guidance, portfolio reviews,
              career development strategies, and hands-on design feedback.
            </p>

            <Button
              asChild
              variant='outline'
              size='lg'
              className='shadow-lg mt-4 cursor-pointer'
            >
              <Link to='/contact'>Sign in to Get Notified When Available</Link>
            </Button>
          </Card>
        </div>

        {/* Illustration */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img
            src='/src/assets/images/comingSoonS.png'
            alt='Designer mentoring illustration'
            className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto'
          />
        </div>
      </div>
    </div>
  );
};