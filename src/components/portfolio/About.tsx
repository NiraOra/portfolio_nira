import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/use-scroll-reveal";
import { FileText, Eye } from "lucide-react";
import { useState } from "react";
import ThesisViewer from "./ThesisViewer";

const About = () => {
  const { ref, controls, staggerVariants, itemVariants } = useScrollReveal({
    margin: "-80px"
  });
  
  const [isThesisViewerOpen, setIsThesisViewerOpen] = useState(false);

  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-small uppercase tracking-widest">About</p>
            <h2 className="heading-section">Education & Background</h2>
            <div className="divider" />
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold">
                  Bachelor of Computer Science (Honours)
                </h3>
                <p className="text-sm text-primary">UNSW Sydney • QS Rank #19</p>
                <p className="text-small">February 2025 - December 2025</p>
              </div>
              <p className="text-body text-muted-foreground">
                Specialized in Artificial Intelligence with a thesis on Few Labels 
                Classification in Text which explores ML models for cardiogenomic disease 
                diagnosis through NLP methodologies including knowledge graphs, neural 
                networks, and Chain of Thought learning.
              </p>
              <div className="pt-3 flex flex-col gap-2">
                <div className="flex gap-3">
                  <a
                    href="/pdfs/Niranjana_Arun_Menon_Thesis.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    View Thesis (PDF)
                  </a>
                  <button
                    onClick={() => setIsThesisViewerOpen(true)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    Interactive Viewer
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  This thesis was submitted as part of the Honours degree requirements. 
                </p>
              </div>
              <p className="text-sm">
                <span className="font-medium">WAM:</span> 81.500 (overall)
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold">
                  Bachelor of Computer Science (AI)
                </h3>
                <p className="text-sm text-primary">UNSW Sydney • QS Rank #19</p>
                <p className="text-small">February 2022 - December 2024</p>
              </div>
              <p className="text-body text-muted-foreground">
                Gained comprehensive exposure to Python, R, Java, JavaScript & TypeScript 
                through hands-on projects in Computer Vision, Machine Learning, Recommender 
                Systems, and Natural Language Processing.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-border"
          >
            <h3 className="font-serif text-lg font-medium mb-6">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python", "TypeScript", "JavaScript", "R", "Java", "SQL", "Rust"
                  ].map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning", "NLP", "TensorFlow", "React", "Azure", "AWS", "GitHub"
                  ].map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <ThesisViewer
        pdfUrl="/pdfs/Niranjana_Arun_Menon_Thesis.pdf"
        isOpen={isThesisViewerOpen}
        onClose={() => setIsThesisViewerOpen(false)}
      />
    </section>
  );
};

export default About;