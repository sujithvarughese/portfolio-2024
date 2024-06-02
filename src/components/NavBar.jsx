import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap"
import { useEffect, useState } from 'react'
import linkedInIcon from '../assets/icons/linkedin-icon.svg';
import fbIcon from '../assets/icons/fb-icon.svg';
import githubIcon from "../assets/icons/github-mark-white.svg"
const emailAddress = "sujith.varug@gmail.com"

import diploma from "../assets/images/certificates/diploma.png"
import metaCert from "../assets/images/certificates/meta_frontend_cert.png"
import javascriptCert from "../assets/images/certificates/adv_javascript_cert.jpg"
import reactNativeCert from "../assets/images/certificates/react_native_cert.jpg"
import mernCert from "../assets/images/certificates/MERN_2024_cert.jpg"
import accountingCert from "../assets/images/certificates/accounting_certificate.png"
import businessManagementCert from "../assets/images/certificates/business_management_cert.png"
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useGlobalContext } from '../context/GlobalContext.jsx'


const NavBar = () => {

  const { activeLink, onUpdateActiveLink }  = useGlobalContext()

  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", currentY => {
    if (currentY > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  return (
    <Navbar className={isScrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand
          href="#home"
          className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
          onClick={()=> onUpdateActiveLink("home")}
        >
          <p className={activeLink === "home" ? "active navbar-link" : "navbar-link"}>
            SV</p>
        </Navbar.Brand>

        <Nav className="me-auto" >
          <Nav.Link
            href="#skills"
            className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("skills")}
          >Skills
          </Nav.Link>
          <Nav.Link
            href="#about"
            className={activeLink === "about" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("about")}
          >About
          </Nav.Link>
          <Nav.Link
            href="#projects"
            className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("projects")}>
            Projects
          </Nav.Link>

          <NavDropdown
            title="Certificates"
            id="basic-nav-dropdown"
            menuVariant="dark"
            autoClose={false}
          >
            <NavDropdown.Item href={diploma} target="_blank" rel="noreferrer">Bachelor's Diploma</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href={metaCert} target="_blank" rel="noreferrer">Meta Front End Developer</NavDropdown.Item>
            <NavDropdown.Item href={javascriptCert} target="_blank" rel="noreferrer">Advanced Javascript</NavDropdown.Item>
            <NavDropdown.Item href={reactNativeCert} target="_blank" rel="noreferrer">React Native 2024</NavDropdown.Item>
            <NavDropdown.Item href={mernCert} target="_blank" rel="noreferrer">MERN Stack 2024</NavDropdown.Item>
            <NavDropdown.Item href={accountingCert} target="_blank" rel="noreferrer">Accounting Technology</NavDropdown.Item>
            <NavDropdown.Item href={businessManagementCert} target="_blank" rel="noreferrer">Business Management</NavDropdown.Item>
          </NavDropdown>

        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="http://facebook.com/sujithvarughese" className="social-icon" target="_blank" rel="noreferrer"><img src={fbIcon} alt="Icon" /></a>
            <a href="http://github.com/sujithvarughese" className="social-icon" target="_blank" rel="noreferrer"><img src={githubIcon} alt="Icon" /></a>
          </div>
          <a href={`mailto:${emailAddress}`} className="vvd connect"><span style={{ color: "white"}}>Contact Me</span></a>
        </span>


      </Container>
    </Navbar>
  )
}

export default NavBar