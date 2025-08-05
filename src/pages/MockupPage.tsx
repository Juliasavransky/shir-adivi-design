import GradientMenu from '@/components/ui/gradient-menu';
import { useQuery } from '@tanstack/react-query';
import { listByTag } from '@/lib/cloudinaryList';
import { ImageComparisonSlider } from '@/components/ui/ImageComparison';
import bgUrl from '@/assets/svg/bg.svg';


interface Photo {
  url: string; // https://res.cloudinary.com/…/w_600/…
  alt: string; // כיתוב חופשי
}

/* types */
export interface MockupPageProps {
  cat: 'menu' | 'billboard';
}

export default function MockupPage() {
  /* 1) Cloudinary – מושכים manu + billboard   */
  const { data: photos = [], isLoading } = useQuery<Photo[]>({
    queryKey: ['mockups', 'all'],
    queryFn: async () => {
      const tags = ['menu', 'billboard'];
      const results = await Promise.all(tags.map((tag) => listByTag(tag)));
      return results.flat();
    },
    staleTime: 60 * 60 * 1_000, // שעה
  });

  return (
    <>
      <GradientMenu />
      
      <div
        /* שכבת-רקע גלובלית */
        className="min-h-screen w-full bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            bgUrl
          )}")`,
        }}
      >

        {photos.length >= 2 && (
          <div className='w-full max-w-4xl mx-auto space-y-10'>
            {/** עובר על המערך בקפיצות של 2 */}
            {photos.map(
              (_, i) =>
                i % 2 === 0 &&
                photos[i + 1] && (
                  <div /* עוטף כל סליידר */
                    key={i}
                    className='rounded-lg border overflow-hidden aspect-[16/9]'
                  >
                    <ImageComparisonSlider
                      leftImage={photos[i].url}
                      rightImage={photos[i + 1].url}
                      altLeft={photos[i].alt}
                      altRight={photos[i + 1].alt}
                    />
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </>
  );
}
