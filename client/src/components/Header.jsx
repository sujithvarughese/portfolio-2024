import { Box, Button, ButtonGroup, HStack, IconButton, Link, useColorMode, useDisclosure } from '@chakra-ui/react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import resume from "../assets/images/profile/portfolio-2024.pdf"
import { FiExternalLink } from "react-icons/fi";
import ToggleColorMode from '../ui/ToggleColorMode.jsx'
import MobileMenu from './MobileMenu.jsx'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'

const Header = ({ scrollToLanding, scrollToProjects, scrollToResume, scrollToContactMe, scrollToAbout }) => {

  const { activeLink } = useGlobalContext()
  const { colorMode } = useColorMode()
  const homeActive = () => activeLink === "home" ? "700" : "500"
  const projectsActive = () => activeLink === "projects" ? "700" : "500"
  const contactMeActive = () => activeLink === "contact-me" ? "700" : "500"
  const aboutActive = () => activeLink === "about" ? "700" : "500"

  const [colorActive, setColorActive] = useState(colorMode === "dark" ? "#F6E05E" : "#2B6CB0")
  useEffect(() => {
    colorMode === "dark" ? setColorActive("#F6E05E") : setColorActive("#2B6CB0")
  }, [colorMode])

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      backdropFilter="blur(20px)"
      zIndex="10"
    >


      <HStack
        as="nav"
        px={{ base: "2", md: "16" }}
        py={{ base: "3", md: "4" }}
        display="flex"
        justifyContent={{ base: "space-between", sm: "flex-end" }}
        alignItems="center"
        direction="row"
      >


          <IconButton display={{ sm: "none" }} aria-label="Toggle Mobile Menu" icon={<HamburgerIcon />} onClick={onOpen}>Mobile Menu</IconButton>
          {isOpen &&
            <MobileMenu
              isOpen={isOpen}
              onClose={onClose}
              scrollToLanding={scrollToLanding}
              scrollToAbout={scrollToAbout}
              scrollToProjects={scrollToProjects}
              scrollToContactMe={scrollToContactMe}
            />}

          <ButtonGroup display={{ base: "none", sm: "flex"}} >
            <Button fontWeight={homeActive} color={activeLink === "home" ? colorActive : ""} variant="link" onClick={scrollToLanding}>Home</Button>
            <Button fontWeight={aboutActive}  color={activeLink === "about" ? colorActive : ""} variant="link" onClick={scrollToAbout}>About</Button>
            <Button fontWeight={projectsActive}  color={activeLink === "projects" ? colorActive : ""} variant="link" onClick={scrollToProjects}>Projects</Button>
            <Button  fontWeight={contactMeActive}  color={activeLink === "contact-me" ? colorActive : ""} variant="link" onClick={scrollToContactMe}>Contact Me</Button>

          <Link sx={{ border: "gray 2px solid", borderRadius: "5px", padding: "5px", display: "flex", alignItems: "center", gap: "8px" }}
                href={resume} isExternal
          >Resume<FiExternalLink />
          </Link>
          </ButtonGroup>

          <ToggleColorMode />
        </HStack>



    </Box>
  )
}

export default Header