import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight, BookOpen, Menu, X } from "lucide-react";

const chapters = [
  { title: "Abstract", page: 2 },
  { title: "1. Introduction", page: 13 },
  { title: "2. Background", page: 15 },
  { title: "3. Literature Review", page: 23 },
  { title: "4. Datasets", page: 34 },
  { title: "5. Methodology", page: 41 },
  { title: "6. Results and Discussion", page: 52 },
  { title: "7. Conclusion and Future Work", page: 66 },
  { title: "References", page: 68 },
  { title: "Appendices", page: 72 },
];

interface ThesisViewerProps {
  pdfUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const ThesisViewer: React.FC<ThesisViewerProps> = ({ pdfUrl, isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showToc, setShowToc] = useState(false);

  const handleChapterClick = (page: number) => {
    setCurrentPage(page);
    setShowToc(false); // Close TOC on mobile after selection
    const pdfFrame = document.getElementById('thesis-pdf') as HTMLIFrameElement;
    if (pdfFrame) {
      pdfFrame.src = `${pdfUrl}#page=${page}`;
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
    >
      <div className="h-full flex flex-col p-2 md:p-8 max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between mb-2 md:mb-6 px-2 md:px-0 flex-shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-lg md:text-2xl font-serif font-medium">Thesis Viewer</h2>
            <button
              onClick={() => setShowToc(!showToc)}
              className="lg:hidden p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Toggle table of contents"
            >
              {showToc ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
          >
            Close
          </button>
        </div>

        {showToc && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-12 left-2 right-2 bg-card rounded-xl p-4 shadow-lg border z-10 max-h-72 overflow-y-auto"
          >
            <h3 className="font-serif text-base font-medium mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Table of Contents
            </h3>
            <nav className="space-y-1">
              {chapters.map((chapter) => (
                <button
                  key={chapter.title}
                  onClick={() => handleChapterClick(chapter.page)}
                  className="w-full text-left p-2 rounded-lg hover:bg-secondary transition-colors group flex items-center justify-between"
                >
                  <span className="text-sm font-medium">{chapter.title}</span>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-xs">{chapter.page}</span>
                    <ChevronRight className="w-3 h-3 group-hover:text-primary" />
                  </div>
                </button>
              ))}
            </nav>
          </motion.div>
        )}

        <div className="flex-1 flex overflow-hidden min-h-0">
          <div className="hidden lg:block w-80 bg-card rounded-xl p-6 overflow-y-auto mr-6 flex-shrink-0">
            <h3 className="font-serif text-lg font-medium mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Table of Contents
            </h3>
            <nav className="space-y-2">
              {chapters.map((chapter) => (
                <button
                  key={chapter.title}
                  onClick={() => handleChapterClick(chapter.page)}
                  className="w-full text-left p-3 rounded-lg hover:bg-secondary transition-colors group flex items-center justify-between"
                >
                  <span className="text-sm font-medium">{chapter.title}</span>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-xs">{chapter.page}</span>
                    <ChevronRight className="w-4 h-4 group-hover:text-primary" />
                  </div>
                </button>
              ))}
            </nav>
          </div>

          <div className="flex-1 bg-card rounded-lg md:rounded-xl overflow-hidden mx-2 md:mx-0">
            <iframe
              id="thesis-pdf"
              src={`${pdfUrl}#page=${currentPage}&toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
              className="w-full h-full border-0"
              title="Thesis PDF"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThesisViewer;