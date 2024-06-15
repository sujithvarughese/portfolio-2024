import NavBar from './components/NavBar.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import NavBarFloat from './components/NavBarFloat.jsx'
import { useRef, Fragment, useEffect, useState } from 'react'
import MessageFloat from './components/MessageFloat.jsx'
import { motion, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion'
import { Stack } from 'react-bootstrap'
import Skills from './sections/Skills.jsx'
import useMouse from '@react-hook/mouse-position'
import Cursor from './components/Cursor.jsx'
const App = () => {

  // refs are forwarded to appropriate components to ref component in that section
  // each component uses IntersectionObserver to observe if component is in view
  // When in view, activeLink global state updates to indicate section in view on navbar
  const heroRef = useRef()
  const skillsRef = useRef()
  const aboutRef = useRef()
  const projectsRef = useRef()

  // scroll functions for above refs are passed to Heading.jsx as onClick for each navbar link
  const scrollToHero = () => {
    heroRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  const scrollToSkills = () => {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      rootMargin: "500px"
    })
  }

  const [isLoading, setIsLoading] = useState(true)

  const resetLoading = () => setIsLoading(false)
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("load",resetLoading);
    return () => window.removeEventListener("load", resetLoading)
  }, [])


  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)


  useMotionValueEvent(scrollY, "change", currentY => {
    const previousY = scrollY.getPrevious()
    if (currentY > previousY) {
      setIsScrolled(true)
    }
  })

  const [showComponents, setShowComponents] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowComponents(true)
    }, 3000)
  }, [])
  
  return (
    <Stack>

      <div className="large tablet">
        <Cursor />
      </div>

      <motion.div
        className="large"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1.4 } }}
      >
        <NavBar
          scrollToHero={scrollToHero}
          scrollToSkills={scrollToSkills}
          scrollToAbout={scrollToAbout}
          scrollToProjects={scrollToProjects}
        />
      </motion.div>

      <motion.div
        className="small"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1.4 } }}
      >
        <NavBarFloat />
      </motion.div>


      <Hero ref={heroRef} />


      {showComponents &&
      <motion.div
        initial={{ opacity: 0, y: 1000 }}
        animate={{
          y: isScrolled ? 0 : 1000,
          opacity: 1, transition: { duration: 1, ease: "easeInOut" }
        }}
      >
        <Skills ref={skillsRef} />
        <About ref={aboutRef}/>
        <Projects ref={projectsRef}/>
        <Footer />
      </motion.div>

      }





    </Stack>
  )
}

export default App
