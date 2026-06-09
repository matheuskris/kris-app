import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <RevealOnScroll>
        <Hero />
        {/* <FeaturedProjects /> */}
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </RevealOnScroll>
    </main>
  );
}
