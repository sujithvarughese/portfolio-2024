import { Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Container, Stack } from '@mui/material'
import Text from "../components/ui/Text.jsx"
import { useEffect, useState } from 'react'
import linkedInIcon from '../assets/icons/linkedin-icon.svg';
import fbIcon from '../assets/icons/fb-icon.svg';
import githubIcon from "../assets/icons/github-mark-white.svg"
import svInitials from "../assets/images/profile/sv.jpeg"

const emailAddress = "sujith.varug@gmail.com"

import resume from "../assets/images/certificates/varughese-sujith-resume.pdf"
import diploma from "../assets/images/certificates/diploma.png"
import comptiaCert from "../assets/images/certificates/compTIA_cert.pdf"
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
            <Box width={{ xs: 32, sm: 48}} component="img" src={svInitials} alt="SV" ></Box>
          </Nav.Link>
        </Navbar.Brand>

        <Nav className="me-auto" style={{ alignItems: "center"}}>
          {/*
            <Nav.Link href="#projects" className="navbar-link">
            <Text fontSize={18}>Projects</Text>
          </Nav.Link>
          */}

             <NavDropdown
            title="Certificates"
            id="basic-nav-dropdown"
            menuVariant="dark"
            autoClose={true}
          >
            <NavDropdown.Item href={diploma} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>Bachelor's Diploma</Text></NavDropdown.Item>
            <NavDropdown.Item href={comptiaCert} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>CompTIA A+</Text></NavDropdown.Item>
            <NavDropdown.Item href={metaCert} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>Meta Front End Developer</Text></NavDropdown.Item>
            <NavDropdown.Item href={accountingCert} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>Accounting Technology</Text></NavDropdown.Item>
            <NavDropdown.Item href={businessManagementCert} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>Business Management</Text></NavDropdown.Item>
            <NavDropdown.Item href={javascriptCert} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>Advanced Javascript</Text></NavDropdown.Item>
            <NavDropdown.Item href={reactNativeCert} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>React Native 2024</Text></NavDropdown.Item>
            <NavDropdown.Item href={mernCert} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>MERN Stack 2024</Text></NavDropdown.Item>
          </NavDropdown>
          {/*
              <Dropdown>
            <Dropdown.Toggle variant="dark">
              Certificates
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href={diploma} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>Bachelor's Diploma</Text></Dropdown.Item>
              <Dropdown.Item href={comptiaCert} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>CompTia A+</Text></Dropdown.Item>
              <Dropdown.Item href={metaCert} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>Meta Front End Developer</Text></Dropdown.Item>
              <Dropdown.Item href={accountingCert} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>Accounting Technology</Text></Dropdown.Item>
              <Dropdown.Item href={businessManagementCert} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>Business Management</Text></Dropdown.Item>
              <Dropdown.Item href={javascriptCert} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>Advanced Javascript</Text></Dropdown.Item>
              <Dropdown.Item href={reactNativeCert} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>React Native 2024</Text></Dropdown.Item>
              <Dropdown.Item href={mernCert} target="_blank" rel="noreferrer"><Text fontSize={{ xs: 14, sm: 18 }}>MERN Stack 2024</Text></Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
         */ }



          <Nav.Link href={resume} className="navbar-link" target="_blank" rel="noreferrer">
            <Text fontSize={{ xs: 14, sm: 18 }}>Resumé</Text>
          </Nav.Link>
        </Nav>

          <Box>
            <span className="navbar-text">
              <Box className="social-icon" sx={{ display: { xs: "none", sm: "initial" } }}>
                <a href="http://facebook.com/sujithvarughese" className="social-icon" target="_blank" rel="noreferrer"><img src={fbIcon} alt="Icon" /></a>
                <a href="http://github.com/sujithvarughese" className="social-icon" target="_blank" rel="noreferrer"><img src={githubIcon} alt="Icon" /></a>
              </Box>
              <a href={`mailto:${emailAddress}`} className="vvd connect">
                <Text color="#fefefe">CONTACT ME</Text>
              </a>
            </span>
          </Box>
      </Container>
    </Navbar>

  )
}

export default NavBar