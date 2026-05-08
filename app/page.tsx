import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceHighlights } from "@/components/experience-highlights";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { InterestsSection } from "@/components/interests-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceHighlights />
        <InterestsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
