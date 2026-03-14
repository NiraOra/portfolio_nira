import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/use-scroll-reveal";

const experiences = [
  {
    title: "Graduate AI Engineer - DDAI Specialist Program",
    company: "Westpac Group",
    period: "February 2026 - Current",
    description: [
      "Accepted into the Westpac Data & AI Graduate Program (NSW), completing rotations across data science, analytics, and AI-driven engineering teams while applying machine learning to large-scale financial systems.",
      "Contributing to the development of agentic AI workflows for software lifecycle automation, enabling LLM-driven generation of problem statements, user stories, test cases, analytics tracking, and automated reporting.",
      "Designing a semantic similarity and recommendation system for identifying redundant user stories using text embeddings and vector similarity methods, supporting more efficient requirements management and product development."],
    tags: ["Machine Learning", "Natural Language Processing", "Large Language Models", "Agentic AI", "Semantic Similarity"
]
  },
  {
    title: "Research Assistant",
    company: "UNSW Sydney",
    supervisor: "Prof. Imran Razzak",
    period: "October 2024 – December 2025",
    description: [
      "Conducting research on ML applications in biological and medical domains, including computer vision and NLP for health data (HPP)",
      "Applied image analysis, NLP techniques, and neural network training to biomedical datasets including retinal fundus images, genomic sequences, and ECG signals",
      "Supporting development of computational models for disease prediction and biomarker discovery",
    ],
    tags: ["Research", "Healthcare AI", "NLP"],
  },
  {
    title: "Data Science Intern",
    company: "Commonwealth Bank of Australia",
    period: "November 2023 – February 2024",
    description: [
      "Pitched features including like/dislike functionality and text-to-audio for the Bankwest Broker chatbot",
      "Collaborated with team of six in Graduate-Intern Hackathon to develop guardrails for improved chatbot outputs",
      "Generated prompts for testing and increased accuracy of invalid-prompt flagging",
    ],
    tags: ["Data Science", "Chatbots", "NLP"],
  },
  {
    title: "Mathematics Tutor",
    company: "Mathnasium",
    period: "June 2022 – September 2025",
    description: [
      "Showcased shortcut mathematical methods for arithmetic concepts",
      "Organized learning plans and monitored student progress",
      "Provided personalized feedback to improve mathematical understanding",
    ],
    tags: ["Teaching", "Mathematics"],
  },
];

const Experience = () => {
  const { ref, staggerVariants, itemVariants, controls } = useScrollReveal({
    margin: "-80px"
  });

  return (
    <section id="experience" className="section-padding bg-card" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-small uppercase tracking-widest">Career</p>
            <h2 className="heading-section">Experience</h2>
            <div className="divider" />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.title + exp.company}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-background border-2 border-primary" />
                
                <div className="space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-medium">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    {exp.supervisor && (
                      <p className="text-small">Supervisor: {exp.supervisor}</p>
                    )}
                    <p className="text-small">{exp.period}</p>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-body text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;