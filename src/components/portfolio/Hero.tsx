import { motion } from "framer-motion";
import { ArrowDown, User } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-center lg:gap-12 space-y-8 lg:space-y-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto lg:mx-0">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-4 border-primary/10 shadow-lg overflow-hidden">
                <User className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-primary/40" />
                {/* <img 
                  src="/path/to/your-photo.jpg" 
                  alt="Niranjana Arun Menon"
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
          </motion.div>

          <div className="flex-1 space-y-8">
            <div className="space-y-4 text-center lg:text-left">
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
              className="max-w-xl space-y-6 mx-auto lg:mx-0"
            >
              <p className="text-body text-muted-foreground text-center lg:text-left">
                Hi, I'm Niranjana! I am a recent UNSW graduate and AI/ML enthusiast with experience in NLP and deep learning. I am 
                interested in building scalable, ethical, and impactful machine learning systems across diverse real-world domains.
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
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
              className="flex items-center gap-6 pt-4 justify-center lg:justify-start"
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
          </div>
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