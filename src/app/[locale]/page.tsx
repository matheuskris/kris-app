import { notFound } from "next/navigation";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { isLocale } from "@/lib/i18n/locales";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-canvas pt-16">
      <RevealOnScroll>
        <Hero locale={locale} />
        <FeaturedProjects locale={locale} />
        <ExperienceSection locale={locale} />
        <AboutSection locale={locale} />
        <ContactSection locale={locale} />
      </RevealOnScroll>
    </main>
  );
}
