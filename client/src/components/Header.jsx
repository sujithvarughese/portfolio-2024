import { Box, Button, HStack, Link, useColorMode, useDisclosure } from '@chakra-ui/react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import ToggleColorMode from '../ui/ToggleColorMode.jsx'
import { useEffect, useState } from 'react'

const Header = ({ scrollToLanding, scrollToProjects, scrollToContactMe, scrollToAbout }) => {

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
        justifyContent={{ base: "space-between" }}
        alignItems="center"
        direction="row"
      >


          <HStack>
            <ToggleColorMode />
            <Button variant="link" fontSize="14px" onClick={scrollToLanding}>sujith varughese</Button>
          </HStack>

          <HStack fontSize="14px">
            <Button fontWeight={projectsActive}  color={activeLink === "projects" ? colorActive : ""} variant="link" onClick={scrollToProjects}>Projects</Button>
            <Link href="mailto:sujith.varug@gmail.com">Contact</Link>
          </HStack>


        </HStack>



    </Box>
  )
}

export default Header