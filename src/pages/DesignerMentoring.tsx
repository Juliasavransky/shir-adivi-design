import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/stores/useLanguage';

export const DesignerMentoring = () => {
  const { lang } = useLanguage();
  return (
    <div className='relative min-h-screen py-20'>
      <div className='absolute bg-local top-1/2 left--2/3 bg-no-repeat inset-0  bg-[url("/src/assets/images/comingSoonS.png")] ' />

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <Card className='p-12 bg-gradient-to-r from-accent/5 to-secondary/5 border-none'>
          <h1 className='text-5xl font-handwriting  md:text-6xl font-bold mb-6'>
            Coming Soon
          </h1>

          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            Designer Mentoring
          </h1>
          <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
            One-on-one mentorship for aspiring designers looking to build their
            portfolio, develop their skills, and advance their careers in
            graphic design.
          </p>

          <div className='space-y-4'>
            <p className='text-muted-foreground'>
              This mentoring program will offer personalized guidance, portfolio
              reviews, career development strategies, and hands-on design
              feedback.
            </p>

            <Button asChild variant="outline" size="lg" className="shadow-lg mt-4">
              <Link to="/contact">
                Sign in to Get Notified When Available
              </Link>
            </Button>
            
          </div>
          
        </Card>
      </div>
    </div>
  );
};
