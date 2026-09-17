import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Specialization from "@/components/Specialization";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageShell from "@/components/PageShell";

export default function Home() {
  return (
    <PageShell>
      <Navbar />
      <main>
        <Hero />
        <ProjectsPreview />
        <TechStack />
        <About />
        <Education />
        <Experience />
        <Specialization />
        <Contact />
      </main>
      <Footer />
    </PageShell>
  );
}
