import { useEffect, useRef, useState } from 'react'
import { Container, Image, Stack } from 'react-bootstrap'
import classes from "../styles/Projects.module.css"
import ProjectDrawer from './ProjectDrawer.jsx'
import { motion, useInView } from 'framer-motion'
import VideoJS from './VideoJS.jsx'

const ProjectCard = ({ title, description, coverImage, coverVideo, heading, link, github, captions, images, tech }) => {

  const [showDrawer, setShowDrawer] = useState(false)
  const onOpen = () => setShowDrawer(true)

  const [isHovering, setIsHovering] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.4 })

  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    responsive: true,

    loop: true,
    preload: 'auto',
    sources: [{
      src: coverVideo,
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };



  return (
    <>
      <ProjectDrawer
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
        title={title}
        description={description}
        images={images}
        captions={captions}
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
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
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
        animate={{
          opacity: isInView ? 1 : 0.5,
          scale: isInView ? 1 : 0.9
      }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isInView ?
          <Image src={coverImage} alt="image" className={classes.image}/>
          :
          <Image src={coverImage} alt="image" className={classes.image}/>
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