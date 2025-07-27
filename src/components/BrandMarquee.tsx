import { useQuery } from '@tanstack/react-query';
import { listByTag } from '@/lib/cloudinaryList';

export function BrandMarquee() {
  const { data = [] } = useQuery({
    queryKey: ['logo'],
    queryFn: () => listByTag('logo'), // <-- שם התג המדויק
    staleTime: 60 * 60 * 1000,
  });

  // כפול כדי שהאנימציה תזרום לנצח
  const items = [...data, ...data];

  return (
    <section className='overflow-hidden py-8 bg-gradient-to-r from-sage/20 to-moss-green/20'>
      <div className='flex animate-marquee  duration-1 whitespace-nowrap'>
        {items.map(({ url, alt }, i) => (
          <div key={i} className='mx-8 flex-shrink-0 flex items-center'>
            <img
              src={url}
              alt={alt}
              loading='lazy'
              className='h-24 w-48 object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition duration-700'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
