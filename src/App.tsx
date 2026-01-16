import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ClassSelection from "./pages/ClassSelection";
import SubjectSelection from "./pages/SubjectSelection";
import ChapterSelection from "./pages/ChapterSelection";
import ComicReader from "./pages/ComicReader";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/classes" element={<ClassSelection />} />
          <Route path="/class/:classId/subjects" element={<SubjectSelection />} />
          <Route path="/class/:classId/subjects/science" element={<ChapterSelection />} />
          <Route path="/class/:classId/subjects/science/chapter/:chapterId" element={<ComicReader />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
