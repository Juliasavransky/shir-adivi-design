import { useLanguage } from '@/stores/useLanguage';
import InteractiveSelector from '@/components/ui/InteractiveSelector';

export const Portfolio = () => {
  const { lang } = useLanguage();

  return (
    <div className='min-h-screen py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center '>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>Portfolio</h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto pb-6'>
            A curated collection of projects spanning branding, print design,
            marketing, and innovative AI-enhanced visuals.
          </p>
        </div>
        {/* Interactive  Gallery */}
        <InteractiveSelector />
      </div>
    </div>
  );
};
