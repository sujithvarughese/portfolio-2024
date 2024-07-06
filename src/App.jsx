import NavBar from './components/NavBar.jsx'
import Hero from './sections/Hero.jsx'
import ProjectsTiles from './sections/ProjectsTiles.jsx'
import { ProjectsTesting } from './sections/Projects.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import NavBarFloat from './components/NavBarFloat.jsx'
import { useRef, Fragment, useEffect, useState } from 'react'
import MessageFloat from './components/MessageFloat.jsx'
import { motion, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion'
import { Container, Stack } from 'react-bootstrap'
import Skills from './sections/Skills.jsx'
import useMouse from '@react-hook/mouse-position'
import helloImage from "./assets/images/backgrounds/hello-transparent.png"
import Box from '@mui/material/Box'
import SkillList from './components/SkillList.jsx'
import { MessageActionButton, NavActionButton } from './components/ActionButton.jsx'

const App = () => {

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
    }, 1000)
  }, [])
  
  return (
    <Box maxWidth={1400} marginX="auto">

      <motion.div
        className="large"
        initial={{ opacity: 0, y: -1000 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 1.5 } }}
      >
        <NavBar/>
      </motion.div>

      <motion.div
        className="small"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1.4 } }}
      >
        <NavActionButton />
        <MessageActionButton />
      </motion.div>

      <Hero />

      {showComponents &&
      <motion.div
        initial={{ opacity: 0, y: 1000 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } }}
      >
        {/* <Skills /> */}
        <SkillList />
        {/* <ProjectsTiles/> */}
        <ProjectsTesting />
        <About />
        <Contact />
        <Footer />
      </motion.div>
      }



    </Box>
  )
}

export default App
