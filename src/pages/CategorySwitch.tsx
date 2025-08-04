import { useParams } from 'react-router-dom';
import GalleryPage from './GalleryPage';
import MockupPage from './MockupPage';
import { NotFound404 } from '../pages/NotFound404';

export default function CategorySwitch() {
  const { cat } = useParams();

  if (cat === 'mockups') return <MockupPage />;

  // cat יכול להיות undefined אם הגיע נתיב לא חוקי
  if (cat !== 'print' && cat !== 'branding' && cat !== 'marketing')
    return <NotFound404 />;

  return <GalleryPage cat={cat} />;
}
