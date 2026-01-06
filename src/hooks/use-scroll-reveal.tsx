import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  margin?: string;
  once?: boolean;
  delay?: number;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const {
    margin = "-100px 0px -200px 0px", 
    once = false, 
    delay = 0
  } = options;
  
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: margin as any,
    once 
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8, 
        delay,
        ease: "easeOut" as const
      }
    }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, 
        delayChildren: delay,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.99
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3, 
        ease: "easeOut" as const
      }
    }
  };

  return {
    ref,
    isInView,
    variants,
    staggerVariants,
    itemVariants,
    controls: isInView ? "visible" : "hidden"
  };
};