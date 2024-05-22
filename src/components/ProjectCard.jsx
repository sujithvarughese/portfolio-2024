import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { motion } from "framer-motion"
import ProjectDrawer from './ProjectDrawer.jsx'

const ProjectCard = ({ title, coverImage, coverVideo, heading, link, github, captions, images, tech, image, desktop, mobile, index }) => {

  const [showDrawer, setShowDrawer] = useState(false)
  const onOpen = () => setShowDrawer(true)
  const textVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      textShadow: "0px 0px 8px rgb(0,0,0)",
      boxShadow: "0px 0px 8px rgb(0,0,0)",
      backdropFilter: "blur(10px)"
    }
  }

  return (
    <>
      <ProjectDrawer
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
        captions={captions}
        coverImage={coverImage}
        title={title}
        heading={heading}
        images={images}
        desktop={desktop}
        mobile={mobile}
        image={image}
        link={link}
        github={github}
        tech={tech}
        index={index}
      />
      <Container className="project-card" onClick={onOpen}>
        <img src={coverVideo} alt="gif"/>
        <Container className="project-text">
          <h3>{title}</h3>
          <h4>{heading}</h4>
        </Container>
      </Container>
    </>

  )
}

export default ProjectCard