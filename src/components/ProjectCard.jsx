import { useEffect, useRef, useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import classes from "../styles/Projects.module.css"
import ProjectDrawer from './ProjectDrawer.jsx'

const ProjectCard = ({ title, coverImage, coverVideo, heading, link, github, captions, images, tech }) => {

  const [showDrawer, setShowDrawer] = useState(false)
  const onOpen = () => setShowDrawer(true)

  const [isHovering, setIsHovering] = useState(false)



  return (
    <>
      <ProjectDrawer
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
        captions={captions}
        coverImage={coverImage}
        title={title}
        images={images}
        link={link}
        github={github}
        tech={tech}
      />
      <Container
        as="button"
        className={`${classes.card} card`}
        onClick={onOpen}
        onMouseEnter={()=>setIsHovering(true)}
        onMouseLeave={()=>setIsHovering(false)}
      >
        {isHovering ?
          <Image src={coverImage} alt="gif"/>
          :
          <video autoPlay loop muted>
            <source src={coverVideo} type="video/mp4"/>
          </video>
        }

        <Container className={classes.text}>
          <h3>{title}</h3>
          <h4>{heading}</h4>
        </Container>
      </Container>
    </>

  )
}

export default ProjectCard