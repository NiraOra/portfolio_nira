import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    {
      icon: Mail,
      label: "Email",
      value: "niraarunmenon@gmail.com",
      href: "mailto:niraarunmenon@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "niranjana-arun-menon",
      href: "https://www.linkedin.com/in/niranjana-arun-menon",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "NiraOra",
      href: "https://github.com/NiraOra",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-card" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <p className="text-small uppercase tracking-widest">Connect With Me</p>
            <div className="divider mx-auto" />
            <p className="text-body text-muted-foreground max-w-md mx-auto">
              Open to research collaborations, AI projects, and early-career opportunities
              across machine learning and applied AI.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-background transition-colors group"
              >
                <div className="p-3 rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <link.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {link.label}
                  </p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;