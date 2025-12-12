import SpaceScene from '@/components/SpaceScene'
import PlanetLayer from '@/components/PlanetLayer'
import CursorGlow from '@/components/CursorGlow'
import LandingHero from '@/components/LandingHero'
import SplashScreen from '@/components/SplashScreen'
import TechCarousel from '@/components/TechCarousel'
import Expertise from '@/components/Expertise'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <SplashScreen duration={5000} once="session" />

      <SpaceScene />
      <PlanetLayer />
      <CursorGlow />

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-10">
        <section id="home">
          <LandingHero />
        </section>

        <section id="tech-carousel" className="mt-16">
          <TechCarousel />
        </section>

        <section id="expertise" className="mt-16">
          <Expertise />
        </section>

        <section id="projects" className="mt-16">
          <ProjectsSection />
        </section>

        <section id="contact" className="mt-16">
          <ContactSection />
        </section>
      </main>
    </>
  )
}
