import NavBar from './components/NavBar.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import { useEffect } from 'react'
import Box from '@mui/material/Box'
import SkillList from './sections/SkillList.jsx'
import Scrollbar from 'smooth-scrollbar'

const App = () => {

  useEffect(() => {
    Scrollbar.init(document.body, { damping : 0.04, });
    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body)
    }
  }, [])

  return (
    <Box maxWidth={1400} m="auto">
      <NavBar/>
      <Hero />
      <SkillList />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Box>


  )
}

export default App
