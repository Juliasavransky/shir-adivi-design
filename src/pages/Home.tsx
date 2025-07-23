import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Phone } from 'lucide-react';
import heroPortrait from '@/assets/images/Portrait.jpg';
import { useLanguage } from "@/stores/useLanguage"


export const Home = () => {
  const brandLogos = [
    'stripe',
    'HSBC',
    'Upwork',
    'Brand D',
    'Brand E',
    'Brand F',
  ];
  const { lang } = useLanguage()

  return (
    <div className='min-h-screen pt-[84px]'>
      {/* Hero Section */}
      <section className='relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-sage/10 to-non-photo-blue/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
          {/* Left Column - 55% */}
          <div className='lg:col-span-7 space-y-8'>
            <h1 className='text-5xl md:text-7xl font-extrabold leading-tight text-magenta-dye'>
              Where leading brands begin
            </h1>

            <p className='text-xl md:text-2xl text-english-violet/80 max-w-lg leading-relaxed'>
              Decades of design, strategy, and visual storytelling that actually
              delivers. Bold ideas take shape through proven expertise.
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
                  href='https://wa.me/1234567890'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Phone className='mr-2 h-4 w-4' />
                  Book a Call
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - 45% */}
          <div className='lg:col-span-5 relative'>
            <div className='relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden'>
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

      {/* Brand Logos Marquee */}
      <section className='bg-gradient-to-r from-sage/20 to-moss-green/20 py-8 overflow-hidden'>
        <div className='flex animate-marquee whitespace-nowrap'>
          {[...brandLogos, ...brandLogos].map((brand, index) => (
            <div
              key={index}
              className='inline-flex items-center justify-center mx-8 min-w-32'
            >
              <span className='text-lg font-medium text-english-violet/70'>
                {brand}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Torn Edge Divider */}
      <div className='h-16 bg-gradient-to-r from-sage to-moss-green relative'>
        <div className='absolute inset-0 bg-gradient-to-r from-sage to-moss-green'></div>
      </div>

      {/* Mentorship & Business Guidance Section */}
      <section className='py-20 bg-white relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-12'>
            {/* Left Column - 60% */}
            <div className='lg:col-span-3 space-y-8'>
              <h2 className='text-4xl font-bold text-magenta-haze mb-8'>
                Transform Your Creative Journey
              </h2>

              {/* Testimonial Carousel Placeholder */}
              <div className='space-y-6'>
                <Card className='p-8 bg-sage/10 border-sage/30'>
                  <div className='flex items-start gap-4'>
                    <div className='w-16 h-16 bg-sage rounded-full flex items-center justify-center flex-shrink-0'>
                      <span className='text-white font-bold'>JD</span>
                    </div>
                    <div>
                      <p className='text-lg italic text-english-violet mb-4'>
                        "Shir's mentorship transformed my approach to design.
                        Her strategic insights helped me land my dream job at a
                        leading agency."
                      </p>
                      <p className='font-semibold text-magenta-haze'>
                        — Jane Designer
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className='p-8 bg-non-photo-blue/10 border-non-photo-blue/30'>
                  <div className='flex items-start gap-4'>
                    <div className='w-16 h-16 bg-non-photo-blue rounded-full flex items-center justify-center flex-shrink-0'>
                      <span className='text-white font-bold'>MS</span>
                    </div>
                    <div>
                      <p className='text-lg italic text-english-violet mb-4'>
                        "The business guidance was invaluable. My studio's
                        revenue increased by 150% after implementing Shir's
                        strategies."
                      </p>
                      <p className='font-semibold text-magenta-haze'>
                        — Mark Studio Owner
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Column - 40% */}
            <div className='lg:col-span-2 space-y-6'>
              <h3 className='text-2xl font-semibold text-magenta-haze mb-6'>
                Choose Your Path
              </h3>

              {/* Tier Cards */}
              <Card className='p-6 bg-moss-green/20 border-moss-green/30 hover:shadow-lg transition-shadow'>
                <h4 className='text-lg font-bold text-magenta-haze mb-3'>
                  Starter Tier
                </h4>
                <p className='text-english-violet mb-4'>
                  Portfolio review and foundational guidance
                </p>
                <div className='text-2xl font-bold text-moonstone mb-2'>
                  $297
                </div>
                <p className='text-sm text-english-violet/70'>
                  One-time session
                </p>
              </Card>

              <Card className='p-6 bg-moss-green/30 border-moss-green/50 hover:shadow-lg transition-shadow'>
                <h4 className='text-lg font-bold text-magenta-haze mb-3'>
                  Pro Tier
                </h4>
                <p className='text-english-violet mb-4'>
                  Portfolio + Strategy + Skill building
                </p>
                <div className='text-2xl font-bold text-moonstone mb-2'>
                  $597
                </div>
                <p className='text-sm text-english-violet/70'>
                  3-month program
                </p>
              </Card>

              <Card className='p-6 bg-moss-green/40 border-moss-green/70 hover:shadow-lg transition-shadow'>
                <h4 className='text-lg font-bold text-magenta-haze mb-3'>
                  Master Tier
                </h4>
                <p className='text-english-violet mb-4'>
                  All digital + personal coaching sessions
                </p>
                <div className='text-2xl font-bold text-moonstone mb-2'>
                  $1,297
                </div>
                <p className='text-sm text-english-violet/70'>
                  6-month intensive
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Blob Easter Egg */}
      <div className='absolute bottom-4 left-4 w-8 h-8 bg-sage/60 rounded-full text-3xl animate-bounce text-center rotate-45'>
        &#x279C;
      </div>
    </div>
  );
};
