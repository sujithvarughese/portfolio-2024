import { Box, Button, ButtonGroup, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Link, useColorMode, useDisclosure } from '@chakra-ui/react'
import resume from '../assets/images/portfolio-2024.pdf'
import { FiExternalLink } from 'react-icons/fi'

const MobileMenu = ({ isOpen, onClose, scrollToLanding, scrollToAbout, scrollToProjects, scrollToContactMe }) => {


  const { colorMode } = useColorMode()

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent height="50%">
          <DrawerCloseButton />
          <DrawerHeader>Main Menu</DrawerHeader>

          <DrawerBody
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            placeItems="center"
            padding={0} margin="none"
          >

            <Button padding={4} height="100%" width="100%" justifyContent="flex-start" onClick={()=> {scrollToLanding(); onClose()}}>Home</Button>
            <Button padding={4} height="100%" width="100%" justifyContent="flex-start" variant="ghost"  onClick={()=>{scrollToAbout(); onClose()}}>About</Button>
            <Button padding={4} height="100%" width="100%" justifyContent="flex-start" onClick={()=> {scrollToProjects(); onClose()}}>Projects</Button>
            <Button padding={4} height="100%" width="100%" justifyContent="flex-start"  variant="ghost" onClick={()=>{scrollToContactMe(); onClose()}}>Contact Me</Button>


            <Link display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  gap="8px"
                  fontWeight="600"
                  bgColor={colorMode === "dark" ? "gray.600" : "gray.100"}
                  height="100%" width="100%"
                  padding={4}
                  href={resume} isExternal
            >Resume<FiExternalLink />
            </Link>


          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>

    </Drawer>
  )
}

export default MobileMenu