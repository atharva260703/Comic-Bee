import { useParams } from "react-router-dom";
import { useState } from "react";
import Logo from "@/components/Logo";
import BackButton from "@/components/BackButton";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

const chapterTitles: Record<number, string> = {
  1: "The Living World",
  2: "Matter & Energy",
  3: "Our Environment",
};

const ComicReader = () => {
  const { classId, chapterId } = useParams();
  const classNumber = parseInt(classId || "5");
  const chapterNumber = parseInt(chapterId || "1");
  
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const totalPages = 10; // Placeholder - actual page count from PDF

  // Placeholder PDF path - replace with actual paths
  const pdfPath = `/pdfs/Ch${chapterNumber}.pdf`;

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleZoomIn = () => {
    if (zoom < 200) setZoom(zoom + 25);
  };

  const handleZoomOut = () => {
    if (zoom > 50) setZoom(zoom - 25);
  };

  return (
    <div className="min-h-screen bg-bee-dark flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BackButton label="Back" />
            <div className="hidden sm:flex items-center gap-2">
              <Logo size="sm" />
              <span className="font-comic text-lg text-primary">Comic Bee</span>
            </div>
          </div>

          <div className="text-center">
            <h1 className="font-comic text-lg md:text-xl text-foreground">
              Chapter {chapterNumber}: {chapterTitles[chapterNumber]}
            </h1>
            <p className="text-xs text-muted-foreground">
              Class {classNumber} • Science
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <span className="text-sm text-muted-foreground min-w-[3rem] text-center">
              {zoom}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors ml-2"
              title="Fullscreen"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Reader Area */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div 
          className="comic-card max-w-4xl w-full aspect-[3/4] flex items-center justify-center overflow-hidden"
          style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'center' }}
        >
          {/* Placeholder for PDF viewer */}
          <iframe
  src={pdfPath}
  className="w-full h-full rounded-lg"
  style={{ border: "none" }}
  title={`Chapter ${chapterNumber} PDF`}
/>

        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="sticky bottom-0 bg-card/95 backdrop-blur border-t border-border px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bee-button-outline py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Previous
          </button>

          <div className="flex items-center gap-2">
            <span className="text-foreground font-semibold">
              Page {currentPage}
            </span>
            <span className="text-muted-foreground">of {totalPages}</span>
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bee-button py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ComicReader;