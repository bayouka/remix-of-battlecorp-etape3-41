import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { ScrollToTop } from "./ScrollToTop";
import { RootRedirect } from "./RootRedirect";
import { LocaleLayout } from "./LocaleLayout";

import Home from "@/pages/Home";
import Legal from "@/pages/Legal";
import NotFound from "@/pages/NotFound";
import GlobalNotFound from "@/pages/GlobalNotFound";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Root redirect to /fr */}
          <Route path="/" element={<RootRedirect />} />

          {/* French routes */}
          <Route path="/fr" element={<LocaleLayout />}>
            <Route index element={<Home />} />
            <Route path="terms" element={<Legal page="terms" />} />
            <Route path="cookies" element={<Legal page="cookies" />} />
            <Route path="privacy" element={<Legal page="privacy" />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* English routes */}
          <Route path="/en" element={<LocaleLayout />}>
            <Route index element={<Home />} />
            <Route path="terms" element={<Legal page="terms" />} />
            <Route path="cookies" element={<Legal page="cookies" />} />
            <Route path="privacy" element={<Legal page="privacy" />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Global 404 for routes outside /fr/* and /en/* */}
          <Route path="*" element={<GlobalNotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
