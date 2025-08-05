import { useParams } from 'react-router-dom';
import GradientMenu from '@/components/ui/gradient-menu';
import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { listByTag } from "@/lib/cloudinaryList";


/* types */

export interface MockupPageProps {
  cat: "manu" | "bilbord" ;
}

interface Photo {
  url: string;          // https://res.cloudinary.com/…/w_600/…
  alt: string;          // כיתוב חופשי
}

export default function MockupPage({ cat }: MockupPageProps) {
  /* 1️⃣  –  Cloudinary fetch  */
  const { data: photos = [], isLoading } = useQuery<Photo[]>({
    queryKey: ["gallery", cat],
    queryFn: () => listByTag(cat),
    staleTime: 1_000 * 60 * 60,          // שעה   (מונע בקשות מיותרות)
  });
  const total = photos.length;

  return (
    <>
      <GradientMenu />
    </>
  );
}
