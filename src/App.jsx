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
  Stats,
} from './components/Sections'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <div style={{ height: 'clamp(64px, 8vw, 104px)' }} />
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
