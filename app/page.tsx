import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import Aurora from "@/components/Aurora"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { StackSection } from "@/components/sections/stack-section"
import { CompetenciesSection } from "@/components/sections/competencies-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        {/* Aurora background — paleta gold/slate */}
        <div className="fixed inset-0 w-full h-full">
          <Aurora
            colorStops={["#3a2e0a", "#1a1a0a", "#0a0a00"]}
            amplitude={1.0}
            blend={0.7}
            speed={0.6}
          />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <StackSection />
          <CompetenciesSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  )
}
