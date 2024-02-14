import { Box, Button, ButtonGroup, HStack, IconButton, Link, useDisclosure } from '@chakra-ui/react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import resume from "../assets/images/portfolio-2024.pdf"
import { FiExternalLink } from "react-icons/fi";
import ToggleColorMode from '../ui/ToggleColorMode.jsx'
import MobileMenu from './MobileMenu.jsx'
import { HamburgerIcon } from '@chakra-ui/icons'

const Header = ({ scrollToLanding, scrollToProjects, scrollToResume, scrollToContactMe, scrollToAbout }) => {

  const { activeLink } = useGlobalContext()
  const homeActive = () => activeLink === "home" ? "800" : "500"
  const projectsActive = () => activeLink === "projects" ? "800" : "500"
  const resumeActive = () => activeLink === "resume" ? "800" : "500"
  const contactMeActive = () => activeLink === "contact-me" ? "800" : "500"
  const aboutActive = () => activeLink === "about" ? "800" : "500"

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

          <ButtonGroup display={{ base: "none", sm: "flex"}}>
            <Button fontWeight={homeActive} variant="link" onClick={scrollToLanding}>Home</Button>
            <Button fontWeight={aboutActive} variant="link" onClick={scrollToAbout}>About</Button>
            <Button fontWeight={projectsActive} variant="link" onClick={scrollToProjects}>Projects</Button>
            <Button  fontWeight={contactMeActive} variant="link" onClick={scrollToContactMe}>Contact Me</Button>

          <Link sx={{ color: "gray", border: "gray 2px solid", borderRadius: "5px", padding: "5px", display: "flex", alignItems: "center", gap: "8px" }}
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