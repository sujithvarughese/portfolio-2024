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

        <p className={classes.description}>{description}</p>

        <Carousel data-bs-theme="dark" className={classes.carousel}>
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

        <Container style={{ display: "flex", gap: "6px", margin: "4px auto", padding: "4px" }}>
          {tech.map((item, index) => <IconLogo key={index} name={item}/>)}
        </Container>

        <ListGroup as="ol">
          {captions.map((caption, index) => <ListGroup.Item key={index}>{caption}</ListGroup.Item>)}
        </ListGroup>

        <Stack direction="horizontal" style={{ justifyContent: "space-evenly", padding: "4px" }}>
          <a href={github} target="_blank" rel="noreferrer"><h5>Github</h5></a>
          {link?.substring(0, 4) === "http" ?
          <a href={link} target="_blank" rel="noreferrer"><h5>Website</h5></a>
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