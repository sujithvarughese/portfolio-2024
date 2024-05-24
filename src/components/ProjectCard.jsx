import { useEffect, useRef, useState } from 'react'
import { Container, Image, Stack } from 'react-bootstrap'
import classes from "../styles/Projects.module.css"
import ProjectDrawer from './ProjectDrawer.jsx'
import { motion, useInView } from 'framer-motion'

const ProjectCard = ({ title, coverImage, coverVideo, heading, link, github, captions, images, tech }) => {

  const [showDrawer, setShowDrawer] = useState(false)
  const onOpen = () => setShowDrawer(true)

  const [isHovering, setIsHovering] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.9})

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
        className={`${classes.large} ${classes.card} card`}
        onClick={onOpen}
        onMouseEnter={()=>setIsHovering(true)}
        onMouseLeave={()=>setIsHovering(false)}
      >
        {isHovering ?
          <Image src={coverImage} alt="gif"/>
          :
          <video autoPlay loop muted controls={false}>
            <source src={coverVideo} type="video/mp4"/>
          </video>
        }
        <Container className={classes.text}>
          <h3>{title}</h3>
          <h4>{heading}</h4>
        </Container>
      </Container>

      <Container
        as={motion.div}
        ref={ref}
        className={`${classes.small} ${classes.card} card`}
        onClick={onOpen}
        initial={{ opacity: 0.5, scale: 0.95 }}
        animate={{
          opacity: isInView ? 1 : 0.5,
          scale: isInView ? 1 : 0.9
      }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isInView ?
          <video autoPlay loop muted controls={false}>
            <source src={coverVideo} type="video/mp4"/>
          </video>
          :
          <Image src={coverImage} alt="image" />
        }
        {isInView &&
          <Container className={classes.text}>
            <h3 style={{ paddingTop: "8px" }}>{title}</h3>
            <h4>{heading}</h4>
          </Container>
        }




      </Container>


    </>

  )
}

export default ProjectCard