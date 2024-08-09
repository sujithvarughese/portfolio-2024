import Box from '@mui/material/Box'
import { Button, Container, Grid, Stack, SvgIcon, Tooltip } from '@mui/material'
import { projectTestingMessage } from '../data/data.js'
import { logos } from './IconPill.jsx'
import Text from './ui/Text.jsx'
import { motion } from 'framer-motion'
import ProjectDrawer from './ProjectDrawer.jsx'
import { useState } from 'react'

const cardVariants = {
  offscreen: {
    y: 100,
    scale: 0.3,
    opacity: 0.2
  },
  onscreen: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1
    }
  },
  viewport: { once: true },
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
        sx={{ overflow: "hidden", display: "flex", justifyContent: "center", flexDirection: { xs: "column", md: "row" } }}
        initial={cardVariants.offscreen}
        whileInView={cardVariants.onscreen}
        viewport={cardVariants.viewport}
      >

        <Box
          component="button"
          variant="contained"
          width={{ xs: "100%", ms: "40%" }}
          onClick={onOpen}
          onMouseEnter={()=>setIsHovering(true)}
          onMouseLeave={()=>setIsHovering(false)}
          sx={{ overflow: "hidden", border: "none" }}
        >
          <Box
            component="img"
            src={isHovering ? coverGif : coverImage}
            alt="project"
            width={420}
            sx={{ border: isHovering ? "5px solid #ED6C02" : "", borderRadius: 3 }}
          />
        </Box>


        <Stack
          component={motion.div}
          width={{ xs: "100%", ms: "40%" }}
          sx={{ placeSelf: "center", gap: 2, height: "100%", overflow: "hidden" }}
        >
          <Box>
            <Button onClick={onOpen} sx={{ p: 0, fontSize: 24, color: "warning.main" }}>{title}</Button>
          </Box>
          <Text variant="subtitle2" fontSize={18}>{heading}</Text>

          <Box sx={{ display: "flex", gap: 1 }}>
            {tech.map((item, index) => <SvgIcon key={index}>{logos[item]}</SvgIcon>)}
          </Box>


          <Stack direction="horizontal" style={{ gap: "36px", paddingY: "10px" }}>
            <a href={github} target="_blank" rel="noreferrer"><Text variant="subtitle1" color="warning.main">Github</Text></a>
            {
              isMobile ?
                <Tooltip title="Warning: This is a mobile app. Items will not render corretly on web browser.">
                  <a href={link} target="_blank" rel="noreferrer"><Text variant="subtitle1" color="warning.main">Demo</Text></a>
                </Tooltip>
                :
                <a href={link} target="_blank" rel="noreferrer"><Text variant="subtitle1" color="warning.main">Demo</Text></a>
            }

          </Stack>

        </Stack>

      </Box>
    </>

  )
}

export default Project