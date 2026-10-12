import { useCallback, useState } from 'react'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Cursor from './components/Cursor.jsx'
import Domains from './components/Domains.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Loader from './components/Loader.jsx'
import Marquee from './components/Marquee.jsx'
import Nav from './components/Nav.jsx'
import Preview from './components/Preview.jsx'
import ProjectIndex from './components/ProjectIndex.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Stack from './components/Stack.jsx'
import { usePointerEffects } from './hooks/useMediaQuery.js'

export default function App() {
  // The project stays set while the sheet slides out, only `open` flips.
  const [modal, setModal] = useState({ project: null, open: false })
  const [hovered, setHovered] = useState(null)
  const pointerEffects = usePointerEffects()

  const openProject = useCallback((project) => {
    setHovered(null)
    setModal({ project, open: true })
  }, [])
  const closeProject = useCallback(() => setModal((m) => ({ ...m, open: false })), [])

  return (
    <>
      <a className="skip" href="#top">Aller au contenu</a>
      <div className="grain" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />
      <ScrollProgress />
      {pointerEffects && (
        <>
          <Cursor big={hovered !== null} />
          <Preview project={hovered} />
        </>
      )}
      <Loader />
      <Nav />

      <main className="wrap" id="top">
        <Hero />
        <Marquee />
        <ProjectIndex onOpen={openProject} onHover={setHovered} />
        <Domains />
        <Experience />
        <Education />
        <Stack />
        <About />
        <Contact />
      </main>

      <Footer />
      <ProjectModal project={modal.project} open={modal.open} onClose={closeProject} />
    </>
  )
}
