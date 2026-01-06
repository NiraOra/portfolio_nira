import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ParticlesBackground from "../ParticlesBackground";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <ParticlesBackground />
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-small uppercase tracking-widest">
              AI & Machine Learning Enthusiast 
            </p>
            <h1 className="heading-display">
              Niranjana<br />
              <span className="text-primary">Arun Menon</span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-xl space-y-6"
          >
            <p className="text-body text-muted-foreground">
              Hi, I'm Niranjana! I am a recent UNSW graduate and AI/ML enthusiast with experience in NLP and deep learning. I am 
              interested in building scalable, ethical, and impactful machine learning systems across diverse real-world domains.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="tag">NLP</span>
              <span className="tag">Machine Learning</span>
              <span className="tag">Computer Vision</span>
              <span className="tag">Healthcare AI</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center gap-6 pt-4"
          >
            <a
              href="#publications"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary link-underline"
            >
              View Publications
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground link-underline"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;