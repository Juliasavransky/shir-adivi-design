import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import GradientMenu from "@/components/ui/gradient-menu";
import { listByTag } from "@/lib/cloudinaryList";

/* types */
export interface GalleryPageProps {
  cat: "print" | "branding" | "marketing";
}

interface Photo {
  url: string;          // https://res.cloudinary.com/…/w_600/…
  alt: string;          // כיתוב חופשי
}

/* ------------------------------------------------------------------ */
/* component */

export default function GalleryPage({ cat }: GalleryPageProps) {
  /* 1️⃣  –  Cloudinary fetch  */
  const { data: photos = [], isLoading } = useQuery<Photo[]>({
    queryKey: ["gallery", cat],
    queryFn: () => listByTag(cat),
    staleTime: 1_000 * 60 * 60,          // שעה   (מונע בקשות מיותרות)
  });

  /* 2️⃣  –  Light-box state (null = סגור) */
  const [current, setCurrent] = useState<number | null>(null);
  const total = photos.length;

  /* 3️⃣  –  control helpers  */
  const close     = useCallback(() => setCurrent(null), []);
  const next      = useCallback(() => setCurrent(i => (i! + 1) % total), [total]);
  const previous  = useCallback(() => setCurrent(i => (i! - 1 + total) % total), [total]);

  /* 4️⃣  –  keyboard navigation  (Arrow ← / → / Esc) */
  useEffect(() => {
    if (current === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  previous();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, close, next, previous]);

  /* 5️⃣  –  loading state */
  if (isLoading) {
    return <p className="p-8">Loading…</p>;
  }

  /* 6️⃣  –  render */
  return (
    <>
      {/* תפריט קטגוריות קבוע בראש העמוד */}
      <GradientMenu />

      {/* Masonry columns – Tailwind columns utilities */}
      <section className="columns-2 gap-4 p-4 sm:columns-3 lg:columns-4">
        {photos.map((p, i) => (
          <img
            key={p.url}                        /* מפתח יציב */
            src={p.url}                        /* w_600 (קל למשיכה) */
            alt={p.alt}
            loading="lazy"
            className="mb-4 w-full cursor-pointer rounded-xl shadow transition hover:scale-[1.02]"
            onClick={() => setCurrent(i)}      /* פותח Light-box */
          />
        ))}
      </section>

      {/* Light-box (נפתח רק כאשר current ≠ null)                   */}
      {current !== null && (
        <>
          {/* Overlay */}
          <div
            onClick={close}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm "
          />

          {/* Image + controls */}
          <figure className="fixed inset-0 z-50 flex items-center justify-center select-none p-6">
            {/* תמונה גדולה יותר – w_800 */}
            <img
              src={photos[current].url.replace("/w_600", "/w_800")}
              alt={photos[current].alt}
              className="max-h-[90vh] rounded-xl shadow-2xl"
            />

            {/* Caption */}
            <figcaption className="absolute bottom-8 px-6 text-lg font-medium text-white">
              {photos[current].alt}
            </figcaption>

            {/* Close */}
            <button
              aria-label="Close"
              onClick={close}
              className="absolute top-6 right-6 text-white/90 hover:text-white"
            >
              <X size={34} />
            </button>

            {/* Prev / Next */}
            <button
              aria-label="Previous"
              onClick={previous}
              className="absolute left-4 sm:left-10 text-white/70 hover:text-white"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-24 sm:right-10 text-white/70 hover:text-white"
            >
              <ChevronRight size={48} />
            </button>
          </figure>
        </>
      )}
    </>
  );
}
