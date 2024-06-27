import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Container, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import linkedInIcon from '../assets/icons/linkedin-icon.svg';
import fbIcon from '../assets/icons/fb-icon.svg';
import githubIcon from "../assets/icons/github-mark-white.svg"
import svInitials from "../assets/images/profile/sv.jpeg"

const emailAddress = "sujith.varug@gmail.com"

import resume from "../assets/images/certificates/resume-2024.png"
import diploma from "../assets/images/certificates/diploma.png"
import metaCert from "../assets/images/certificates/meta_frontend_cert.png"
import javascriptCert from "../assets/images/certificates/adv_javascript_cert.jpg"
import reactNativeCert from "../assets/images/certificates/react_native_cert.jpg"
import mernCert from "../assets/images/certificates/MERN_2024_cert.jpg"
import accountingCert from "../assets/images/certificates/accounting_certificate.png"
import businessManagementCert from "../assets/images/certificates/business_management_cert.png"
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import Box from '@mui/material/Box'


const NavBar = () => {

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
      <Container sx={{ display: "flex", alignItems: "center"}}>
        <Navbar.Brand href="#home" className="navbar-link">
          <Nav.Link className="navbar-link">
            <Box width={48} component="img" src={svInitials} alt="SV" ></Box>
          </Nav.Link>
        </Navbar.Brand>

        <Nav className="me-auto" style={{ alignItems: "center"}}>
          <Nav.Link href="#projects" className="navbar-link">
            <Typography fontSize={18}>Projects</Typography>
          </Nav.Link>

          <Typography>
            <NavDropdown
              title="Certificates"
              id="basic-nav-dropdown"
              menuVariant="dark"
              autoClose={true}
            >
              <NavDropdown.Item href={diploma} target="_blank" rel="noreferrer">Bachelor's Diploma</NavDropdown.Item>
              <NavDropdown.Item href={metaCert} target="_blank" rel="noreferrer">Meta Front End Developer</NavDropdown.Item>
              <NavDropdown.Item href={accountingCert} target="_blank" rel="noreferrer">Accounting Technology</NavDropdown.Item>
              <NavDropdown.Item href={businessManagementCert} target="_blank" rel="noreferrer">Business Management</NavDropdown.Item>
              <NavDropdown.Item href={javascriptCert} target="_blank" rel="noreferrer">Advanced Javascript</NavDropdown.Item>
              <NavDropdown.Item href={reactNativeCert} target="_blank" rel="noreferrer">React Native 2024</NavDropdown.Item>
              <NavDropdown.Item href={mernCert} target="_blank" rel="noreferrer">MERN Stack 2024</NavDropdown.Item>
            </NavDropdown>
          </Typography>

          <Nav.Link href={resume} className="navbar-link" target="_blank" rel="noreferrer">
            <Typography fontSize={18}>Resume</Typography>
          </Nav.Link>
        </Nav>

          <Box>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="http://facebook.com/sujithvarughese" className="social-icon" target="_blank" rel="noreferrer"><img src={fbIcon} alt="Icon" /></a>
                <a href="http://github.com/sujithvarughese" className="social-icon" target="_blank" rel="noreferrer"><img src={githubIcon} alt="Icon" /></a>
              </div>
              <a href={`mailto:${emailAddress}`} className="vvd connect">
                <Typography color="#fefefe">CONTACT ME</Typography>
              </a>
            </span>
          </Box>
      </Container>
    </Navbar>

  )
}

export default NavBar