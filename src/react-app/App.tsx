import { BackToTop } from "./components/BackToTop";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Expertise } from "./sections/Expertise";
import { Hero } from "./sections/Hero";
import { Philosophy } from "./sections/Philosophy";
import { Projects } from "./sections/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Philosophy />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
