import NavBar from './components/NavBar.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import { useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Stack } from 'react-bootstrap'
import Box from '@mui/material/Box'
import SkillList from './sections/SkillList.jsx'
import Scrollbar from 'smooth-scrollbar'
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

  const options = {
    damping : 0.07,
    plugins: {
    },
  }
  useEffect(() => {
    Scrollbar.init(document.body, options);

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body)
    }
  }, [])

  return (
    <Box>
      <Box maxWidth={1400} marginX="auto" position="relative">

        {/*<Box
          component={motion.div}
          initial={{ opacity: 0, y: -1000 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 1.5 } }}
        >*/}
          <NavBar/>
        {/*</Box>*/}

        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1.4 } }}
          sx={{ display: { sm: "none" } }}
        >
        </Box>

        <Hero />

        {showComponents &&
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 1000 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } }}
          >
            <SkillList />
            {/* <ProjectsTiles/> */}
            <About />
            <Projects />
            <Contact />
            <Footer />
          </Stack>
        }
      </Box>
    </Box>

  )
}

export default App
