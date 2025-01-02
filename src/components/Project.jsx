import Box from '@mui/material/Box'
import { Button, Stack, SvgIcon } from '@mui/material'
import { logos } from './IconPill.jsx'
import Text from './ui/Text.jsx'
import { motion } from 'framer-motion'
import ProjectDrawer from './ProjectDrawer.jsx'
import { useState } from 'react'
import MobilePopUp from './MobilePopUp.jsx'

const cardVariants = {
  offscreen: {
    y: 20,
    scale: 0.8,
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
  featured
}) => {

  const [showDrawer, setShowDrawer] = useState(false)
  const [showMobileModal, setShowMobileModal] = useState(false)
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
        isMobile={isMobile}
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
          width={{ xs: "100%", md: "50%" }}
          onClick={onOpen}
          onMouseEnter={()=>setIsHovering(true)}
          onMouseLeave={()=>setIsHovering(false)}
          sx={{ overflow: "hidden", border: "none" }}
        >
          <Box
            component="img"
            src={isHovering ? coverImage : coverGif}
            alt="project"
            width={{ sm: 420 }}
            sx={{ border: isHovering ? "5px solid #ED6C02" : "", borderRadius: 3 }}
          />
        </Box>


        <Stack
          component={motion.div}
          width={{ xs: "100%", md: "50%" }}
          sx={{ placeSelf: "center", gap: 2, height: "100%", overflow: "hidden" }}
        >
          <Box display="flex" alignItems="center">
            <Button onClick={onOpen} sx={{ p: 0, fontSize: 24, color: "warning.main" }}>{title}</Button>
          </Box>
          <Text variant="subtitle2" fontSize={18}>{heading}</Text>

          <Box sx={{ display: "flex", gap: 1 }}>
            {tech.map((item, index) => <SvgIcon key={index}>{logos[item]}</SvgIcon>)}
          </Box>


          <Stack direction="horizontal" sx={{ gap: "36px", paddingY: "10px", justifyContent: { xs: "space-evenly", md: "flex-start" } }}>
            <Box component="button" sx={{ border: '2px orange solid' }}>
              <a href={github} target="_blank" rel="noreferrer"><Text variant="subtitle1" fontSize="20px" color="warning.main">Github</Text></a>
            </Box>
            {
              isMobile ?
                <>
                  <Box component="button" onClick={() => setShowMobileModal(!showMobileModal)} border="none" sx={{ border: "2px orange solid" }}>
                    <Text variant="subtitle1" fontSize="20px" color="warning.main">Demo</Text>
                  </Box>
                  {showMobileModal && <MobilePopUp open={showMobileModal} onClose={() => setShowMobileModal(false)} link={link} />}
                </>
                :
                <Box component="button" sx={{ border: "2px orange solid" }}>
                  <a href={link} target="_blank" rel="noreferrer"><Text variant="subtitle1" fontSize="20px" color="warning.main">Demo</Text></a>
                </Box>
            }
          </Stack>

        </Stack>

      </Box>
    </>
  )
}

export default Project