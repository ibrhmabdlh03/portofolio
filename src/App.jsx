import Hero from './components/Hero'
import Navbar from './components/Navbar'
import {
  About,
  Contact,
  Experience,
  Footer,
  Projects,
  Recognition,
  SkillsEducation,
} from './components/Sections'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Recognition />
        <SkillsEducation />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
