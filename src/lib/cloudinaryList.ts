// אין import של "cloudinary"!
type CloudItem = { public_id: string; format: string };

export interface Photo {
  url: string;
  alt: string;
}

export async function listByTag(tag: string): Promise<Photo[]> {
  const CLOUD = import.meta.env.VITE_CLOUD_NAME;
  const res = await fetch(
    `https://res.cloudinary.com/${CLOUD}/image/list/${tag}.json`
  );
  if (!res.ok) throw new Error(`List fetch failed for tag "${tag}"`);

  const { resources } = await res.json();

  const base =
    `https://res.cloudinary.com/${CLOUD}/image/upload/` +
    `f_auto,q_auto,w_800/`;


  return (resources as CloudItem[]).map(({ public_id, format }) => ({
    url: `${base}${public_id}.${format}`,
    alt: public_id.split("/").pop()!.replace(/[-_]/g, " "),
  }));
  
}
