import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap"
import classes from '../styles/NavBar.module.css'
import { useEffect, useState } from 'react'
import linkedInIcon from '../assets/icons/linkedin-icon.svg';
import fbIcon from '../assets/icons/fb-icon.svg';
import githubIcon from "../assets/icons/github-mark-white.svg"
import IconLogo from './IconLogo.jsx'

const NavBar = () => {

  const [activeLink, setActiveLink] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const emailAddress = "sujith.varug@gmail.com"
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => setActiveLink(value)

  return (
    <Navbar expand="lg" className={isScrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          sujith varughese
        </Navbar.Brand>


          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === "about" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("about")}>About</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="http://linkedin.com/sujithvarughese" className="social-icon" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="icon" /></a>
              <a href="http://facebook.com/sujithvarughese" className="social-icon" target="_blank" rel="noreferrer"><img src={fbIcon} alt="icon" /></a>
              <a href="http://github.com/sujithvarughese" className="social-icon" target="_blank" rel="noreferrer"><img src={githubIcon} alt="icon" /></a>
            </div>
          </span>
          <a href={`mailto:${emailAddress}`} className="vvd"><span>Let's Connect</span></a>

      </Container>
    </Navbar>
  )
}

export default NavBar