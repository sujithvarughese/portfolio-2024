import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Container, Nav, Navbar, NavDropdown, Stack } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { IoIosHome, IoIosApps } from "react-icons/io";
import { RiUser3Fill } from "react-icons/ri";
import { PiCertificateFill } from "react-icons/pi";
import { IoAppsSharp } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";

import { FaFacebookF, FaGithub } from "react-icons/fa6";

import resume from "../assets/images/certificates/resume-2024.png"
import diploma from "../assets/images/certificates/diploma.png"
import metaCert from "../assets/images/certificates/meta_frontend_cert.png"
import javascriptCert from "../assets/images/certificates/adv_javascript_cert.jpg"
import reactNativeCert from "../assets/images/certificates/react_native_cert.jpg"
import mernCert from "../assets/images/certificates/MERN_2024_cert.jpg"
import accountingCert from "../assets/images/certificates/accounting_certificate.png"
import businessManagementCert from "../assets/images/certificates/business_management_cert.png"
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { BiMessageRoundedDetail } from "react-icons/bi";
import MessageFloat from './MessageFloat.jsx'
import Box from '@mui/material/Box'
const emailAddress = "sujith.varug@gmail.com"

const NavBarFloat = () => {
/*
  const { scrollY } = useScroll()
  const [isHidden, setIsHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", currentY => {
    const previousY = scrollY.getPrevious()
    if (currentY > previousY) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })
*/
  return (

      <Navbar
        /*animate={{
          transform: isHidden ? "translateY(100px)" : "",
          transition: { duration: 0.5, ease: "easeInOut" }
        }}*/
      >
        <Container direction="horizontal">

          <NavDropdown
            title={<PiCertificateFill size="64px" color="#000000" />}
            autoClose={true}

            drop="up"
            style={{ backgroundColor: "#1976d2", borderRadius: "8px", opacity: "0.9", padding: "1px" }}

          >

            <NavDropdown.Item href={resume} target="_blank" rel="noreferrer">Resume</NavDropdown.Item>
            <NavDropdown.Item href={diploma} target="_blank" rel="noreferrer">Diploma</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href={metaCert} target="_blank" rel="noreferrer">Meta Front End Developer</NavDropdown.Item>
            <NavDropdown.Item href={accountingCert} target="_blank" rel="noreferrer">Accounting Technology</NavDropdown.Item>
            <NavDropdown.Item href={businessManagementCert} target="_blank" rel="noreferrer">Business Management</NavDropdown.Item>
            <NavDropdown.Item href={javascriptCert} target="_blank" rel="noreferrer">Advanced Javascript</NavDropdown.Item>
            <NavDropdown.Item href={reactNativeCert} target="_blank" rel="noreferrer">React Native 2024</NavDropdown.Item>
            <NavDropdown.Item href={mernCert} target="_blank" rel="noreferrer">MERN Stack 2024</NavDropdown.Item>


          </NavDropdown>
          {/*
          <Nav className={classes.links}>
            <Nav.Link
              href="#about"
              className={activeLink === "about" ? classes.active : ""}
              onClick={() => onUpdateActiveLink("about")}
            >
              <RiUser3Fill size="24px" color={activeLink === "about" ? "#66d9ed" : "#fff"} />
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === "projects" ? classes.active : ""}
              onClick={() => onUpdateActiveLink("projects")}
            >
              <IoAppsSharp size="24px" color={activeLink === "projects" ? "#66d9ed" : "#fff"}/>
            </Nav.Link>
          </Nav>
          */}
          <Stack direction="horizontal">
            <a
              href={`mailto:${emailAddress}`} target="_blank" rel="noreferrer"
              style={{ backgroundColor: "#1976d2", borderRadius: "8px", opacity: "0.9", padding: "1px 6px" }}
            >
              <BiMessageRoundedDetail size="64px" color="#000000" />
            </a>


            {/*<a href="http://facebook.com/sujithvarughese" target="_blank" rel="noreferrer"><FaFacebookF size="24px"/></a>*/}
            {/*<a href="http://github.com/sujithvarughese" target="_blank" rel="noreferrer"><FaGithub size="24px"/></a>*/}
          </Stack>
        </Container>
      </Navbar>





  )
}

export default NavBarFloat