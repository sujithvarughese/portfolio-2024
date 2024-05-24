import classes from '../styles/NavBarFloat.module.css'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { IoIosApps } from "react-icons/io";

const NavBarFloat = () => {

  const { scrollY } = useScroll()
  const [isHidden, setIsHidden] = useState(false)
  const [activeLink, setActiveLink] = useState("home")

  useMotionValueEvent(scrollY, "change", currentY => {
    const previousY = scrollY.getPrevious()
    console.log("previous", previousY)
    console.log("current", currentY)
    if (currentY > previousY) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })

  useEffect(() => {

  }, [isHidden])
  const onUpdateActiveLink = (value) => setActiveLink(value)

  return (

    <Container
      as={motion.nav}
      className={classes.container}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-10%" }
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Nav className={classes.links}>
        <Nav.Link
          href="#home"
          className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
          onClick={() => onUpdateActiveLink("home")}
        >
          <HiOutlineHome size="32px" />
        </Nav.Link>
        <Nav.Link
          href="#about"
          className={activeLink === "about" ? "active navbar-link" : "navbar-link"}
          onClick={() => onUpdateActiveLink("about")}
        >
          <HiOutlineUser size="32px" />
        </Nav.Link>
        <Nav.Link
          href="#projects"
          className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
          onClick={() => onUpdateActiveLink("projects")}
        >
          <IoIosApps size="32px" />
        </Nav.Link>
      </Nav>
    </Container>


  )
}

export default NavBarFloat