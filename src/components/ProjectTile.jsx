import { useState } from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import ButtonBase from '@mui/material/ButtonBase'
import ProjectDrawer from './ProjectDrawer.jsx'

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.25,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));
const ProjectCard = ({ title, description, coverImage, coverVideo, coverGif, heading, link, isMobile, github, captions, images, tech, width }) => {

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
        isMobile={isMobile}
        github={github}
        tech={tech}
      />
      <ImageIconButton
        style={{
          width: "100%",
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={onOpen}
      >
        {isHovering ?
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              backgroundImage: `url(${coverGif})`,
            }}
          />
          :
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              backgroundImage: `url(${coverImage})`,
            }}
          />
        }

        <ImageBackdrop className="imageBackdrop" />
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center',
            color: 'common.white',
          }}
        >

        </Box>
      </ImageIconButton>
    </>

  )
}

export default ProjectCard