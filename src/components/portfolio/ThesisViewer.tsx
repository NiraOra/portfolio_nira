import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight, BookOpen } from "lucide-react";

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

  const handleChapterClick = (page: number) => {
    setCurrentPage(page);
    // Navigate to specific page in PDF
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
      <div className="container-narrow h-full py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif font-medium">Thesis Viewer</h2>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Close
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-120px)]">
          {/* Chapter Navigation */}
          <div className="lg:col-span-1 bg-card rounded-xl p-6 overflow-y-auto">
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

          {/* PDF Viewer */}
          <div className="lg:col-span-3 bg-card rounded-xl overflow-hidden">
            <iframe
              id="thesis-pdf"
              src={`${pdfUrl}#page=${currentPage}`}
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