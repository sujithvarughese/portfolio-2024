import { Carousel, Image, ListGroup, Offcanvas } from 'react-bootstrap'
import IconPill from './IconPill.jsx'
import { mobileWarning, projectTestingMessage } from '../data/data.js'
import Text from "../components/ui/Text.jsx"
import { Box, Container, Stack } from '@mui/material'
import MobilePopUp from './MobilePopUp.jsx'
import { useState } from 'react'
const ProjectDrawer = ({ isOpen, onClose, title, description, images, captions, link, isMobile, github, tech }) => {

  const [showMobileModal, setShowMobileModal] = useState(false)


  return (
    <Offcanvas
        show={isOpen}
        onHide={onClose}
        scroll="true"
        style={{ height: "100vh" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title><h3>{title}</h3></Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body
        style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'space-evenly', gap: "8px", paddingTop: "8px", paddingBottom: "8px" }}>

        <Box display={{ xs: "none", sm: "revert" }}>
          <Text variant="body1" textAlign="justify" whiteSpace="break-spaces">{description}</Text>
        </Box>

        <Box display={{ sm: "none" }}>
          <Carousel data-bs-theme="dark">
            {images.map((image, index) => {
              return (
                <Carousel.Item key={index}>
                  <Container>
                    <Image src={image} alt="app-image" style={{ width: "300px", height: "300px" }} />
                  </Container>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Box>

        <Box display={{ xs: "none", sm: "revert" }}>
          <Carousel data-bs-theme="dark">
            {images.map((image, index) => {
              return (
                <Carousel.Item key={index}>
                  <Container>
                    <Image src={image} alt="app-image" style={{ width: "300px" }} />
                  </Container>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Box>

        <ListGroup as="ol">
          {captions.map((caption, index) =>
            <ListGroup.Item key={index}>
              <Text variant="body1">{caption}</Text>
            </ListGroup.Item>)}
        </ListGroup>

        <Stack direction="horizontal" style={{ justifyContent: "center", gap: "36px", padding: "10px" }}>

          <a href={github} target="_blank" rel="noreferrer"><Text variant="subtitle1" fontSize="20px" color="warning.main">Github</Text></a>
          {
            isMobile ?
              <>
                <Box component="button" onClick={()=>setShowMobileModal(!showMobileModal)} p={0} border="none" ><Text variant="subtitle1" fontSize="20px" color="warning.main">Demo</Text></Box>
                {showMobileModal && <MobilePopUp open={showMobileModal} onClose={() => setShowMobileModal(false)} link={link} />}
              </>
              :
              <a href={link} target="_blank" rel="noreferrer"><Text variant="subtitle1" fontSize="20px" color="warning.main">Demo</Text></a>
          }
        </Stack>
        {/*
        <Container>
          {tech.map((item, index) => <Icon key={index} name={item}/>)}
        </Container>
        */}
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ProjectDrawer

/*
{
          (index === 0 || index === 1 || index === 2) ?

            <PhoneImageContainer images={images}/>
            :
            <DesktopMobileImageContainer desktop={desktop} mobile={mobile} />
        }
 */