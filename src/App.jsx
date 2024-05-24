import NavBar from './sections/NavBar.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import AboutMe from './sections/AboutMe.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import NavBarFloat from './sections/NavBarFloat.jsx'
import { Fragment } from 'react'

const App = () => {

  return (
    <>
      <div className="large">
        <NavBar />
      </div>
      <div className="small">
        <NavBarFloat />
      </div>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
