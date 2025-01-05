import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Tape from "@/sections/Tape";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <Skills />
      <section id="projects">
        <Projects />
      </section>
      <Tape />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
