import { Box, Button, HStack, Link } from '@chakra-ui/react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import resume from "../assets/images/resume-2024.pdf"
import { FiExternalLink } from "react-icons/fi";
import ToggleColorMode from '../ui/ToggleColorMode.jsx'

const Header = ({ scrollToLanding, scrollToProjects, scrollToResume, scrollToContactMe, scrollToAbout }) => {

  const { activeLink } = useGlobalContext()
  const homeActive = () => activeLink === "home" ? "800" : "500"
  const projectsActive = () => activeLink === "projects" ? "800" : "500"
  const resumeActive = () => activeLink === "resume" ? "800" : "500"
  const contactMeActive = () => activeLink === "contact-me" ? "800" : "500"
  const aboutActive = () => activeLink === "about" ? "800" : "500"

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      backdropFilter="blur(20px)"
      zIndex="10"
    >


      <Box

        px={{ base: "2", md: "16" }}
        py={{ base: "3", md: "4" }}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        direction="row"

      >

        <HStack as="nav">
          <Button fontWeight={homeActive} variant="link" onClick={scrollToLanding}>Home</Button>
          <Button fontWeight={aboutActive} variant="link" onClick={scrollToAbout}>About</Button>
          <Button fontWeight={projectsActive} variant="link" onClick={scrollToProjects}>Projects</Button>
          <Button  fontWeight={contactMeActive} variant="link" onClick={scrollToContactMe}>Contact Me</Button>
          <Link sx={{ color: "gray", border: "gray 2px solid", borderRadius: "5px", padding: "5px", display: "flex", alignItems: "center", gap: "8px" }}
                href={resume} isExternal
          >Resume<FiExternalLink />
          </Link>
          <ToggleColorMode />
        </HStack>

      </Box>

    </Box>
  )
}

export default Header