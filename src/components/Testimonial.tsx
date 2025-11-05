import { useRef } from "react";

type Position = "front" | "middle" | "back";

interface TestimonialCardProps {
  handleShuffle: (dir: "next" | "prev") => void;
  testimonial: string;
  author: string;
  id: number;
  position: Position;
}

export default function TestimonialCard({
  handleShuffle,
  testimonial,
  author,
  id,
  position,
}: TestimonialCardProps) {
  const dragStartX = useRef<number>(0);
  const isFront = position === "front";

  const rotate =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const translateX =
    position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const z = position === "front" ? 2 : position === "middle" ? 1 : 0;

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const delta = dragStartX.current - e.clientX;
    if (Math.abs(delta) > 150) {
      handleShuffle(delta > 0 ? "next" : "prev");
    }
    dragStartX.current = 0;
  };

  return (
    <div
      role="listitem"
      className={`
        absolute left-0 top-0 grid select-none place-content-center
        space-y-6 rounded-2xl p-6 shadow-xl backdrop-blur-md transition-transform
        ${isFront ? "cursor-grab active:cursor-grabbing" : "cursor-default"}
      `}
      style={{
        zIndex: z,
        transform: `translateX(${translateX}) rotate(${rotate})`,
        height: "100%",
        maxWidth: "350px",
        width: "90vw",
      }}
      draggable={isFront}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <img
        src={`https://i.pravatar.cc/128?img=${id}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-slate-200 object-cover"
      />

      <span className="text-center text-base sm:text-lg italic text-slate-900">
        &ldquo;{testimonial}&rdquo;
      </span>

      <span className="text-center text-sm font-medium text-english-violet">
        {author}
      </span>
    </div>
  );
}