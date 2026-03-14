import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/use-scroll-reveal";
import { FileText, Eye } from "lucide-react";
import { useState } from "react";
// ThesisViewer removed

const About = () => {
  const { ref, controls, staggerVariants, itemVariants } = useScrollReveal({
    margin: "-80px"
  });
  
  // ThesisViewer state removed

  return (
    <section id="about-section" className="section-padding bg-card" ref={ref}>
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
                <div className="mt-4 p-6 bg-gradient-to-br from-secondary via-background to-card rounded-xl shadow-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4v15"/><path d="M8 4v15"/><path d="M16 4v15"/><path d="M20 4v15"/></svg>
                    <h3 className="font-serif text-2xl font-bold text-primary">Thesis Summary</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-muted-foreground">Few Labels Classification in Text - Exploring Machine Learning Models for Cardiogenomic Diagnosis</p>
                    <p className="italic text-sm text-muted-foreground mb-2">Supervisor: Dr. Imran Razzak</p>
                    <ul className="list-disc pl-6 text-base text-body mb-2">
                      <li>Advanced machine learning & NLP for cardiogenomic disease diagnosis</li>
                      <li>Focus on few-label classification problems</li>
                      <li>Leveraged knowledge graphs, traditional ML, LLMs, and chain-of-thought learning</li>
                      <li>Improved diagnostic accuracy in biomedical contexts with limited labeled data</li>
                      <li>Bridging AI and healthcare with novel research contributions</li>
                    </ul>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    This thesis was submitted as part of the Honours degree requirements and attained a High Distinction.
                  </div>
                </div>
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
      
      {/* ThesisViewer removed */}
    </section>
  );
};

export default About;