import { useQuery } from '@tanstack/react-query';
import { listByTag } from '@/lib/cloudinaryList';
import React, { useState} from 'react';
import { cn } from '@/lib/utils';
import Index from './Index';

export interface GalleryPageProps {
  cat: 'print' | 'branding' | 'marketing';
  cards: Card[];
}

type Card = {
  id: number;
  content?: JSX.Element | React.ReactNode | string;
  className?: string;
  thumbnail?: string;
  src: string;
  alt: string;
};

export default function GalleryPage({ cat, cards: initialCards }: GalleryPageProps) {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const { data: cards = [], isLoading } = useQuery({
    queryKey: ["gallery", cat],
    queryFn: () => listByTag(cat),          // ← Cloudinary fetch
  });

  if (isLoading) return <p className='p-8'>Loading...</p>;
    // if (error)     return <p className="p-8 text-red-600">שגיאת טעינה</p>;

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };
console.log("Selected card:", cards);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-4">
      {cards.map((photo: any, i) => {
        const card: Card = {
          id: i,
          src: photo.url || photo.secure_url,
          alt: photo.alt || photo.public_id || '',
          thumbnail: photo.secure_url || photo.url
        };
        return (
          <GalleryCard
            key={i}
            card={card}
            isSelected={selected?.id === i}
            onSelect={() => setSelected(card)}
          />
        );
      })}

      {/* Overlay – רק כשיש תמונה פתוחה */}
      {selected && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        />
      )}
    </div>
  );
}


interface CardProps {
  card: Card;
  isSelected: boolean;
  onSelect: () => void;
}

function GalleryCard({ card, isSelected, onSelect }: CardProps) {
  return (
    <div
      onClick={onSelect}
      className={cn(
        "relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-zinc-100 shadow transition",
        isSelected ? "z-50 md:col-span-3 md:row-span-2" : "hover:scale-[1.02]"
      )}
    >
      {/* תמונה */}
      <img
        src={card.thumbnail}
        alt={card.alt}
        className={cn(
          "h-full w-full object-cover object-top transition-all duration-300",
          isSelected ? "scale-100" : "scale-110"
        )}
      />

      {/* כיתוב מופיע רק במצב פתוח */}
      {isSelected && (
        <div className="absolute inset-0 flex items-end justify-center bg-black/40 p-4 text-white">
          <p className="text-lg font-medium">{card.alt}</p>
        </div>
      )}
    </div>
  );
}
