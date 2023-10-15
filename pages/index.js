import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Mysection from "@/components/mysection";

export default function Home() {
  return (
    <>
      <Mysection />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
