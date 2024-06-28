import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
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
import { Button, Stack  } from '@mui/material'
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
        <Stack direction="horizontal" width="100%" justifyContent="space-between">

          <Button variant="contained">
            <NavDropdown
              title={<PiCertificateFill size="64px" color="#000000" />}
              autoClose={true}
              drop="up"
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
          </Button>

          <Button variant="contained">
            <a href={`mailto:${emailAddress}`} target="_blank" rel="noreferrer">
              <BiMessageRoundedDetail size="64px" color="#000000" />
            </a>

            {/*<a href="http://facebook.com/sujithvarughese" target="_blank" rel="noreferrer"><FaFacebookF size="24px"/></a>*/}
            {/*<a href="http://github.com/sujithvarughese" target="_blank" rel="noreferrer"><FaGithub size="24px"/></a>*/}
          </Button>
        </Stack>


      </Navbar>





  )
}

export default NavBarFloat