import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import GradientMenu from "@/components/ui/gradient-menu";
import { listByTag } from "@/lib/cloudinaryList";

export interface GalleryPageProps {
  cat: "print" | "branding" | "marketing";
}

interface Photo {
  url: string;
  alt: string;
}

export default function GalleryPage({ cat }: GalleryPageProps) {
  const { data: photos = [], isLoading } = useQuery<Photo[]>({
    queryKey: ["gallery", cat],
    queryFn: () => listByTag(cat),
    staleTime: 1_000 * 60 * 60,
  });

  const [current, setCurrent] = useState<number | null>(null);
  const total = photos.length;

  const close = useCallback(() => setCurrent(null), []);
  const next = useCallback(() => setCurrent(i => (i! + 1) % total), [total]);
  const previous = useCallback(() => setCurrent(i => (i! - 1 + total) % total), [total]);

  useEffect(() => {
    if (current === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, close, next, previous]);

  if (isLoading) {
    return <p className="p-8">Loading…</p>;
  }

  return (
    <>
      <GradientMenu />

      <section className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 p-4">
        {photos.map((p, i) => (
          <img
            key={p.url}
            src={p.url}
            alt={p.alt}
            loading="lazy"
            className="mb-4 w-full cursor-pointer rounded-xl shadow transition hover:scale-[1.02]"
            onClick={() => setCurrent(i)}
          />
        ))}
      </section>

      {current !== null && (
        <>
          <div
            onClick={close}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          />

          <figure className="fixed inset-0 z-50 flex items-center justify-center select-none p-4 sm:p-6">
            <img
              src={photos[current].url.replace("/w_600", "/w_800")}
              alt={photos[current].alt}
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            />

            <figcaption className="absolute bottom-6 sm:bottom-8 px-4 sm:px-6 text-base sm:text-lg font-medium text-white text-center w-full">
              {photos[current].alt}
            </figcaption>

            <button
              aria-label="Close"
              onClick={close}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/90 hover:text-white"
            >
              <X size={30} className="sm:size-8" />
            </button>

            <button
              aria-label="Previous"
              onClick={previous}
              className="absolute left-3 sm:left-6 text-white/70 hover:text-white"
            >
              <ChevronLeft size={40} className="sm:size-12" />
            </button>

            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-3 sm:right-6 text-white/70 hover:text-white"
            >
              <ChevronRight size={40} className="sm:size-12" />
            </button>
          </figure>
        </>
      )}
    </>
  );
}