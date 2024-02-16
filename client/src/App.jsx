import { useRef } from 'react'
import { Header, Footer } from "./components"
import { Landing, Projects, ContactMe, About } from './sections'
import Alert from './components/Alert.jsx'
import { Box, useColorMode } from '@chakra-ui/react'
const App = () => {

  // refs are forwarded to appropriate components to ref component in that section
  // each component uses IntersectionObserver to observe if component is in view
  // When in view, activeLink global state updates to indicate section in view on navbar
  const landingRef = useRef()
  const projectsRef = useRef()
  const contactMeRef = useRef()
  const aboutRef = useRef()

  const { colorMode } = useColorMode()

  // scroll functions for above refs are passed to Heading.jsx as onClick for each navbar link
  const scrollToLanding = () => {
    landingRef.current.scrollIntoView({
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
  const scrollToContactMe = () => {
    contactMeRef.current.scrollIntoView({
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
  return (
    <Box backgroundImage={colorMode === "dark" ? "linear-gradient(to bottom, #000000, #202020)" : "linear-gradient(to bottom, #FFFFFF, #DCDCDC)"}>

      <Header
        scrollToLanding={scrollToLanding}
        scrollToProjects={scrollToProjects}
        scrollToContactMe={scrollToContactMe}
        scrollToAbout={scrollToAbout}
      />
      <main style={{ marginTop: "50px" }}>
        <Landing ref={landingRef}/>
        <About ref={aboutRef} />
        <Projects ref={projectsRef}/>
        <ContactMe ref={contactMeRef}/>
        <Alert />
      </main>

      <Footer />


    </Box>
  )
}

export default App
