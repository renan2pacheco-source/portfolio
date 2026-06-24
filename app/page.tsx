import { PaperNav } from "@/components/paper-nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { CompetenciesSection } from "@/components/sections/competencies-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"
import { BindingHoles } from "@/components/binding-holes"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <BindingHoles />
      <PaperNav />
      <main className="relative z-10 lg:pl-24 xl:pl-28 2xl:pl-32">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CompetenciesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
