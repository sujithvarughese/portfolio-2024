import { ListGroup, Offcanvas } from 'react-bootstrap'
import classes from "../styles/Projects.module.css"
const ProjectDrawer = ({ isOpen, onClose, title, coverImage, coverVideo, heading, link, github, captions, images, tech, image, desktop, mobile, index }) => {
  return (
    <Offcanvas show={isOpen} onHide={onClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title><h1>{title}</h1></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h3>{heading}</h3>
        <ListGroup as="ol">
          {captions.map((caption, index) => <ListGroup.Item key={index}>{caption}</ListGroup.Item>)}
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ProjectDrawer