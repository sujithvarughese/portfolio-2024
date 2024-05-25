import classes from '../styles/NavBarFloat.module.css'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { IoIosHome, IoIosApps } from "react-icons/io";
import { RiUser3Fill } from "react-icons/ri";


const NavBarFloat = () => {

  const { scrollY } = useScroll()
  const [isHidden, setIsHidden] = useState(false)
  const [activeLink, setActiveLink] = useState("home")

  useMotionValueEvent(scrollY, "change", currentY => {
    const previousY = scrollY.getPrevious()
    if (currentY > previousY) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })



  const onUpdateActiveLink = (value) => setActiveLink(value)

  return (
      <Nav
        as={motion.nav}
        className={classes.container}
        variants={{
          visible: { y: "20%" },
          hidden: { y: "-100%" }
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Container className={classes.links}>
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
        </Container>

      </Nav>



  )
}

export default NavBarFloat