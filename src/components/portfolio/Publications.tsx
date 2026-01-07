import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/use-scroll-reveal";
import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    title: "How Effectively Can Large Language Models Connect SNP Variants and ECG Phenotypes for Cardiovascular Risk Prediction?",
    authors: "Niranjana Arun Menon, Iqra Farooq, Yulong Li, Sara Ahmed, Yutong Xie, Muhammad Awais, Imran Razzak",
    venue: "IEEE BIBM 2025",
    status: "Accepted",
    preprint: "http://arxiv.org/abs/2508.07127",
    tags: ["Longitudinal Analysis", "Machine Learning", "Biological Age", "Feature Engineering", "SHAP"],
  },
  {
    title: "Few-Label Multimodal Modeling of SNP Variants and ECG Phenotypes Using Large Language Models for Cardiovascular Risk Stratification",
    authors: "Niranjana Arun Menon, Iqra Farooq, Yulong Li, Sara Ahmed, Muhammad Awais, Imran Razzak",
    venue: "ARR 2025-NAACL",
    status: "Submitted",
    preprint: "https://arxiv.org/abs/2510.16536",
    tags: ["Cardiovascular Diseases", "LLMs", "Single Nucleotide Polymorphism", "Time-Series Analysis"],
  },
  {
    title: "Genesis5K: Hierarchical and Causal Diagnostics for Long-Video Understanding",
    authors: "Yulong Li, Yuxuan Zhang, Man Lei, yibo.yuan, Yichen Li, Xiwei Liu, Xinlin Zhuang, Haolin Yang, Yifan Lu, Niranjana Arun Menon, Chong Li, Yutong Xie, Jionglong Su, Imran Razzak",
    venue: "ARR ACL 2026",
    status: "Submitted",
    preprint: "https://openreview.net/pdf?id=ANNxHszSJG",
    tags: ["Long-form Video Understanding", "Multimodal Large Language Models", "Causal Reasoning", "Hierarchical Cognitive Taxonomy","Diagnostic Evaluation","Embodied AI"]
  },
  {
    title: "Exploring the Influence of Lifestyle, Social Health, and Demographic Factors on Psychological Well-being and Engagement Levels",
    authors: "Md. Rafiqul Islam, Niranjana Arun Menon, Mohamed Reda Bouadjenek, Eran Segal, Imran Razzak",
    venue: "WWW 2026",
    status: "Submitted",
    tags: ["Loneliness", "Psychological Well-Being", "Social Health", "Lifestyle Factors", "Depression"],
  },
  {
    title: "Decoding Causal Structure: End-to-End Mediation",
    authors: "Yulong Li, Xiwei Liu, Niranjana Arun Menon, Eran Segal, Imran Razzak",
    venue: "Nature Machine Intelligence",
    status: "In Preparation",
    tags: ["Causal Inference", "Mediation Analysis"],
  }
];

const Publications = () => {
  const { ref, staggerVariants, itemVariants, controls } = useScrollReveal({
    margin: "-80px"
  });

  return (
    <section id="publications" className="section-padding" ref={ref}>
      <div className="container-narrow bg-background rounded-xl p-8 shadow-card border border-border">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-small uppercase tracking-widest">Research</p>
            <h2 className="heading-section">Publications</h2>
            <div className="divider" />
            <p className="text-body text-muted-foreground max-w-xl">
              Research conducted using the Human Phenotype Project (HPP) under the supervision of 
              Professor Imran Razzak, focusing on AI applications in healthcare and genomics.
              (Note: only preprints available currently)
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            {publications.map((pub, index) => (
              <motion.article
                key={pub.title}
                variants={itemVariants}
                className={`card-elegant group ${
                  pub.status === "Accepted" 
                    ? "bg-background border border-primary/20 ring-1 ring-primary/10" 
                    : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {pub.venue}
                      </span>
                      <span className={`text-xs ${
                        pub.status === "Accepted" 
                          ? "text-amber-600 font-medium" 
                          : pub.status === "Submitted"
                          ? "text-blue-600 font-medium"
                          : pub.status === "In Preparation"
                          ? "text-slate-500 font-medium"
                          : "text-muted-foreground"
                      }`}>
                        • {pub.status}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-lg md:text-xl font-medium leading-snug group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    
                    <p className="text-small">
                      {pub.authors}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="tag text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {pub.preprint && (
                    <a
                      href={pub.preprint}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="View preprint"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {!pub.preprint && (
                    <div className="flex-shrink-0 p-3 rounded-full bg-muted">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;