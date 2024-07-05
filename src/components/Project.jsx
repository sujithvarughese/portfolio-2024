import Box from '@mui/material/Box'
import { Button, Container, Grid, Stack, SvgIcon } from '@mui/material'
import { projectTestingMessage } from '../data/data.js'
import { logos } from './Icon.jsx'
import Text from './ui/Text.jsx'
import { motion } from 'framer-motion'
import ProjectDrawer from './ProjectDrawer.jsx'
import { useState } from 'react'

const cardVariants = {
  offscreen: {
    y: 100,
    scale: 0.3
  },
  onscreen: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 1
    }
  },
  viewport: { once: true },
  animation: { transition: { duration: 4 } }

};


const Project = ({
  title,
  heading,
  description,
  coverImage,
  coverVideo,
  coverGif,
  link,
  isMobile,
  github,
  captions,
  images,
  tech,
  width
}) => {

  const [showDrawer, setShowDrawer] = useState(false)
  const onOpen = () => setShowDrawer(true)

  const [isHovering, setIsHovering] = useState(false)

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
      <Box
        component={motion.div}
        sx={{ display: "flex", justifyContent: "center" }}
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <Box
          component={motion.button}
          width="40%"
          initial={{...cardVariants.offscreen, x: -300}}
          whileInView={cardVariants.onscreen}
          animate={cardVariants.animation}
          viewport={cardVariants.viewport}
          onClick={onOpen}
          onMouseEnter={()=>setIsHovering(true)}
          onMouseLeave={()=>setIsHovering(false)}
        >
          <Box component="img" src={isHovering ? coverGif : coverImage} alt="project" width={420}/>
        </Box>


        <Stack
          component={motion.div}
          width="40%"
          sx={{ placeSelf: "center", gap: 2, height: "100%" }}
          initial={{ ...cardVariants.offscreen, x: 300 }}
          whileInView={cardVariants.onscreen}
          animate={cardVariants.animation}
          viewport={cardVariants.viewport}

        >
          <Box>
            <Button fontWeight={700} onClick={onOpen} sx={{ p: 0 }}>{title}</Button>
          </Box>
          <Text variant="caption" sx={{ }}>{heading}</Text>

          <Container sx={{ display: "flex", gap: 1 }}>
            {tech.map((item, index) => <SvgIcon key={index}>{logos[item]}</SvgIcon>)}
          </Container>


          <Stack direction="horizontal" style={{ gap: "36px", padding: "10px" }}>
            <a href={github} target="_blank" rel="noreferrer"><h5>Github</h5></a>
            <a href={link} target="_blank" rel="noreferrer"><h5>Demo</h5></a>
          </Stack>

        </Stack>

      </Box>
    </>

  )
}

export default Project