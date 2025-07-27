import { useQuery } from "@tanstack/react-query";
import { listByTag } from "@/lib/cloudinaryList";

export default function LogoGallery() {
  const { data = [], isLoading, error } = useQuery({
    queryKey: ["logo"],
    queryFn: () => listByTag("logo"),
    staleTime: 1000 * 60 * 60, // שעה
  });

  if (isLoading) return <p className="p-8">טוען…</p>;
  if (error)     return <p className="p-8 text-red-600">שגיאת טעינה</p>;

  return (
    <section className="columns-2 gap-4 p-4 md:columns-3 lg:columns-4">
      {data.map(({ url, alt }) => (
        <img
          key={url}
          src={url}
          alt={alt}
          loading="lazy"
          className="mb-4 w-full rounded-lg shadow-sm hover:shadow-lg transition"
        />
      ))}
    </section>
  );
}
