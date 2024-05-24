import { Carousel, Container, Image, ListGroup, Offcanvas, Stack } from 'react-bootstrap'
import classes from "../styles/Projects.module.css"
import IconLogo from './IconLogo.jsx'
const ProjectDrawer = ({ isOpen, onClose, title, description, images, captions, link, github, tech }) => {
  return (
    <Offcanvas show={isOpen} onHide={onClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title><h3>{title}</h3></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>

        <Stack className={classes.description}>
          {description}
        </Stack>

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
          {link?.substring(0, 4) === "http" ?
            <a href={link} target="_blank" rel="noreferrer">Website</a>
            :
            <>{link}</>
          }
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