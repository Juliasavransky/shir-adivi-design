import '@/lib/i18n';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

import { useLanguage } from '@/stores/useLanguage';

import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Portfolio } from '@/pages/Portfolio';
import CategorySwitch from '@/pages/CategorySwitch';
import { BusinessGuidance } from '@/pages/BusinessGuidance';
import { DesignerMentoring } from '@/pages/DesignerMentoring';
import { Contact } from '@/pages/Contact';
import { NotFound404 } from '@/pages/NotFound404';

const queryClient = new QueryClient();

export default function App() {
  /* הקריאה מפעילה סנכרון dir + i18n; אין חובה להשתמש בערך המוחזר */
  useLanguage();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route element={<Layout />} path='/'>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='portfolio' element={<Portfolio />} />
              <Route path='portfolio/:cat' element={<CategorySwitch />} />

              <Route path='business-guidance' element={<BusinessGuidance />} />
              <Route
                path='designer-mentoring'
                element={<DesignerMentoring />}
              />
              <Route path='contact' element={<Contact />} />
            </Route>
            {/* מסלול לכידת 404 */}
            <Route path='*' element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>

      {/* Devtools זמינים רק בפיתוח */}
      {/* {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />} */}
    </QueryClientProvider>
  );
}
