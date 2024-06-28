import { Carousel, Image, ListGroup, Offcanvas } from 'react-bootstrap'
import Icon from './Icon.jsx'
import { mobileWarning, projectTestingMessage } from '../data/data.js'
import { Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/material'
const ProjectDrawer = ({ isOpen, onClose, title, description, images, captions, link, isMobile, github, tech }) => {
  return (
    <Offcanvas
        show={isOpen}
        onHide={onClose}


    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title><h3>{title}</h3></Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'space-around', gap: "8px" }}>

        <Typography variant="body2" textAlign="justify" whiteSpace="break-spaces">{description}</Typography>

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

        <ListGroup as="ol">
          {captions.map((caption, index) =>
            <ListGroup.Item key={index}>
              <Typography variant="body2">{caption}</Typography>
            </ListGroup.Item>)}
        </ListGroup>

        {
          isMobile &&
          <Box px={3} py={2}>
            <Typography variant="subtitle2">{mobileWarning}</Typography>
          </Box>
        }

        <Stack direction="horizontal" style={{ justifyContent: "center", gap: "36px", padding: "10px" }}>

          <a href={github} target="_blank" rel="noreferrer"><h5>Github</h5></a>
          {link ?
          <a href={link} target="_blank" rel="noreferrer"><h5>Demo</h5></a>
          :
          <Typography>{projectTestingMessage}</Typography>
          }
        </Stack>

        <Container>
          {tech.map((item, index) => <Icon key={index} name={item}/>)}
        </Container>

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