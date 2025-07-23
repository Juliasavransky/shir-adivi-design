import { Toaster } from '@/components/ui/toaster';
import '@/lib/i18n';
import { useLanguage } from '@/stores/useLanguage';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { BusinessGuidance } from './pages/BusinessGuidance';
import { DesignerMentoring } from './pages/DesignerMentoring';
import { Contact } from './pages/Contact';
import { NotFound404 } from './pages/NotFound404';

const queryClient = new QueryClient();

const App = () => {
  useLanguage();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='portfolio' element={<Portfolio />} />
              <Route path='business-guidance' element={<BusinessGuidance />} />
              <Route
                path='designer-mentoring'
                element={<DesignerMentoring />}
              />
              <Route path='contact' element={<Contact />} />
            </Route>
            {/* 404 route without layout */}
            <Route path='*' element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
