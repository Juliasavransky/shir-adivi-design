import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { AccessibilityWidget } from "@/components/AccessibilityWidget";



export const Layout = () => {
  return (
    <div className='min-h-screen bg-background '>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <AccessibilityWidget />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};
