/*  src/components/TestimonialCard.tsx  */
import { useRef } from "react";

type Position = "front" | "middle" | "back";

interface TestimonialCardProps {
  handleShuffle: (dir: "next" | "prev") => void;   // ⬅️
  testimonial: string;
  author: string;
  id: number;           // לצורך יצירת Avatar דמו  
  position: Position;   // "front" | "middle" | "back"
}

export default function TestimonialCard({
  handleShuffle,
  testimonial,
  author,
  id,
  position,
}: TestimonialCardProps) {
  /* נעקוב אחרי מיקום האצבע / העכבר כדי לדעת אם נגררה שמאלה מספיק */
  const dragStartX = useRef<number>(0);

  /* כרטיס קדמי בלבד ניתן לגרירה */
  const isFront = position === "front";

  /* טרנספורמציות ל-*layout* */
  const rotate =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const translateX =
    position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const z = position === "front" ? 2 : position === "middle" ? 1 : 0;

  /* events */
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
  };

 const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
  const delta = dragStartX.current - e.clientX;      // + = שמאלה
  if (Math.abs(delta) > 150) {
    handleShuffle(delta > 0 ? "next" : "prev");      // ⬅️ כיוון
  }
  dragStartX.current = 0;
};

  return (
    <div
      className={`
        absolute left-0 top-0 grid h-[450px] w-[350px] select-none
        place-content-center space-y-6 rounded-2xl 
        bg-slate-800/20 p-6 shadow-xl backdrop-blur-md
        ${isFront ? "cursor-grab active:cursor-grabbing" : ""}
      `}
      /* אנימציה חלקה ע״י transition */
      style={{
        zIndex: z,
        transform: `translateX(${translateX}) rotate(${rotate})`,
        transition: "transform 0.35s ease",
      }}
      draggable={isFront}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <img
        src={`https://i.pravatar.cc/128?img=${id}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full  bg-slate-200 object-cover"
      />

      <span className="text-center text-lg italic text-slate-900">
        &ldquo;{testimonial}&rdquo;
      </span>

      <span className="text-center text-sm font-medium text-indigo-800">
        {author}
      </span>
    </div>
  );
}
