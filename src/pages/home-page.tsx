import Hero from "../components/hero"
import Partners from "@/components/partners"
import Impact from "../components/impact"
import About from "../components/about"
import ProgramsSection from "../components/programs-section"
import Contact from "../components/contact"
import DonatePage from "@/components/donate"

function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <Impact />
      <About />
      <ProgramsSection />
      <Contact />
      <DonatePage />
    </>
  )
}

export default HomePage
