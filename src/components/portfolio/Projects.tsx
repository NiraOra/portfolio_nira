import { motion } from "framer-motion";
import { Trophy, Github } from "lucide-react";
import { useScrollReveal } from "../../hooks/use-scroll-reveal";

const projects = [
  {
    title: "AI Forge Flashcards",
    subtitle: "UNSW Capstone Project • Atlassian",
    period: "October – December 2024",
    description:
      "Created a Forge app within Confluence with a team of five. Integrated AI using pre-trained NLP models (T5 and SpanBERT) for flashcard generation via HuggingFace, hosted on Ngrok API.",
    tags: ["Confluence", "NLP", "T5", "SpanBERT", "HuggingFace"],
    highlight: false,
  },
  {
    title: "Career Horizons",
    subtitle: "BuildClub x UNSW AI Society Hackathon",
    period: "December 2024",
    description:
      "Won the AI hackathon by building a website for navigating internships and career development. Utilized Groq AI, Cursor V0, ChatGPT, and Claude for personalized recommendations based on skills and experience.",
    tags: ["Hackathon Winner", "Groq AI", "Career Tech"],
    highlight: true,
  },
  {
    title: "Article-Based Music Recommender",
    subtitle: "BuildClub AI Hackathon",
    period: "June 2024",
    description:
      "Developed a chatbot recommending top 10 songs relevant to articles being consumed. Trained transformer models on ~100k songs dataset using ML algorithms for text-to-song matching.",
    tags: ["Transformers", "Recommender Systems", "NLP"],
    highlight: false,
  },
  {
    title: "Neurodivergent Study System",
    subtitle: "UNSW New Wave Founders",
    period: "October – November 2024",
    description:
      "Initiated a startup developing AI-generated quizzes catered to neurodivergent students. Combined ML techniques for quiz generation with accessible UI/UX design.",
    tags: ["Startup", "Accessibility", "EdTech", "ML"],
    highlight: false,
  },
];

const Projects = () => {
  const { ref, staggerVariants, itemVariants, controls } = useScrollReveal({
    margin: "-80px"
  });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-small uppercase tracking-widest">Work</p>
            <h2 className="heading-section">Featured Projects</h2>
            <div className="divider" />
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                className={`card-elegant relative ${project.highlight ? 'ring-2 ring-primary/20' : ''}`}
              >
                {project.highlight && (
                  <div className="absolute -top-3 left-6 flex items-center gap-1.5 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    <Trophy className="w-3 h-3" />
                    Winner
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-medium">{project.title}</h3>
                    <p className="text-sm text-primary">{project.subtitle}</p>
                    <p className="text-small">{project.period}</p>
                  </div>

                  <p className="text-body text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center pt-4"
          >
            <a
              href="https://github.com/NiraOra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors link-underline"
            >
              <Github className="w-4 h-4" />
              View more on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;