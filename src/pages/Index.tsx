import Navigation from "../components/portfolio/Navigation";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Publications from "../components/portfolio/Publications";
import Experience from "../components/portfolio/Experience";
import Projects from "../components/portfolio/Projects";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Publications />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;