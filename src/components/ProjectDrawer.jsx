import { Carousel, Container, Image, ListGroup, Offcanvas, Stack } from 'react-bootstrap'
import classes from "../styles/Projects.module.css"
import PhoneImageContainer from './PhoneImageContainer.jsx'
import DesktopMobileImageContainer from './DesktopMobileImageContainer.jsx'
import IconLogo from './IconLogo.jsx'
//import DesktopMobileImageContainer from './DesktopMobileImageContainer.jsx'
const ProjectDrawer = ({ isOpen, onClose, title, link, github, captions, images, tech }) => {
  return (
    <Offcanvas show={isOpen} onHide={onClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title><h3>{title}</h3></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Carousel variant="dark" className={classes.carousel}>
          {images.map((image, index) => {
            return (
              <Carousel.Item key={index}>
                <Container className={classes.carouselContainer}>
                  <Image src={image} alt="app-image" style={{ height: "500px", width: 'auto' }} />
                </Container>
              </Carousel.Item>
            )
          })}
        </Carousel>

        <Container>
          {tech.map((item, index) => <IconLogo key={index} name={item}/>)}
        </Container>

        <ListGroup as="ol">
          {captions.map((caption, index) => <ListGroup.Item key={index}>{caption}</ListGroup.Item>)}
        </ListGroup>

        <Stack>
          <a href={github} target="_blank" rel="noreferrer">Github</a>
          <a href={link} target="_blank" rel="noreferrer">Website</a>
        </Stack>

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