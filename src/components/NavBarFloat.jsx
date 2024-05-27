import classes from '../styles/NavBarFloat.module.css'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Container, Nav, Navbar, NavDropdown, Stack } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { IoIosHome, IoIosApps } from "react-icons/io";
import { RiUser3Fill } from "react-icons/ri";
import { PiCertificateFill } from "react-icons/pi";
import { FaFacebookF, FaGithub } from "react-icons/fa6";

import diploma from "../assets/images/certificates/diploma.png"
import metaCert from "../assets/images/certificates/meta_frontend_cert.png"
import javascriptCert from "../assets/images/certificates/adv_javascript_cert.jpg"
import reactNativeCert from "../assets/images/certificates/react_native_cert.jpg"
import mernCert from "../assets/images/certificates/MERN_2024_cert.jpg"
import accountingCert from "../assets/images/certificates/accounting_certificate.png"
import businessManagementCert from "../assets/images/certificates/business_management_cert.png"
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { BiMessageRoundedDetail } from "react-icons/bi";
const emailAddress = "sujith.varug@gmail.com"

const NavBarFloat = () => {

  const { activeLink, onUpdateActiveLink } = useGlobalContext()

  const { scrollY } = useScroll()
  const [isHidden, setIsHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", currentY => {
    const previousY = scrollY.getPrevious()
    if (currentY > previousY) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
    console.log(isHidden)
  })

  return (
      <Navbar
        as={motion.nav}
        className={classes.navbar}
        initial={false}
        //animate={isHidden ? { y : -10 } : { y: 10 }}
        transition={{
          transform: isHidden ? "translateY(-100px)" : "translateY(100px)",
          duration: 0.5,
          ease: "easeInOut" }}
      >
        <Stack direction="horizontal"
          className={classes.content}
        >
          <NavDropdown
            title={<PiCertificateFill size="28px" color="#fff"/>}
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
          <Nav className={classes.links}>
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? classes.active : ""}
              onClick={() => onUpdateActiveLink("home")}
            >
              <IoIosHome size="24px" />
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={activeLink === "about" ? classes.active : ""}
              onClick={() => onUpdateActiveLink("about")}
            >
              <RiUser3Fill size="24px" />
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === "projects" ? classes.active : ""}
              onClick={() => onUpdateActiveLink("projects")}
            >
              <IoIosApps size="24px" />
            </Nav.Link>
          </Nav>
          <Stack direction="horizontal" className={classes.socials}>
            <a href={`mailto:${emailAddress}`} target="_blank" rel="noreferrer"><BiMessageRoundedDetail size="24px"/></a>
            {/*<a href="http://facebook.com/sujithvarughese" target="_blank" rel="noreferrer"><FaFacebookF size="24px"/></a>*/}
            {/*<a href="http://github.com/sujithvarughese" target="_blank" rel="noreferrer"><FaGithub size="24px"/></a>*/}
          </Stack>
        </Stack>


      </Navbar>



  )
}

export default NavBarFloat