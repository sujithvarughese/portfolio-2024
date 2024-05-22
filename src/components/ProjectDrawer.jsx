import { Container, ListGroup, Offcanvas, Stack } from 'react-bootstrap'
import classes from "../styles/Projects.module.css"
import PhoneImageContainer from './PhoneImageContainer.jsx'
import DesktopMobileImageContainer from './DesktopMobileImageContainer.jsx'
//import DesktopMobileImageContainer from './DesktopMobileImageContainer.jsx'
const ProjectDrawer = ({ isOpen, onClose, title, coverImage, coverVideo, heading, link, github, captions, images, tech, image, desktop, mobile, index }) => {
  return (
    <Offcanvas show={isOpen} onHide={onClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title><h1>{title}</h1></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h3>{heading}</h3>
        {
          (index === 0 || index === 1 || index === 2) ?

            <PhoneImageContainer images={images}/>
            :
            <DesktopMobileImageContainer desktop={desktop} mobile={mobile} />
        }
        <ListGroup as="ol">
          {captions.map((caption, index) => <ListGroup.Item key={index}>{caption}</ListGroup.Item>)}
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ProjectDrawer