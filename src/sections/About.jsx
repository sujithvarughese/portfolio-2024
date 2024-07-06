import { Col, Image, Row, Stack } from 'react-bootstrap'
import { Box, Button, Container, Grid, Snackbar, TextField } from '@mui/material'
import Text from "../components/ui/Text.jsx"
import { aboutMeHeadline, aboutMe, aboutMe2, aboutMe3, aboutMeUpdated } from '../data/data.js'
import profilePicture from "../assets/images/profile/hera.png"
import { skills } from '../data/data.js'
import Icon from '../components/Icon.jsx'
import { useEffect, forwardRef } from 'react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { motion } from 'framer-motion'

const About = () => {

  const cardVariants = {
    offscreen: {
      y: 400,
      scale: 0.3,
      opacity: 0.2
    },
    onscreen: {
      x: 0,
      y: 400,
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1
      }
    },
    viewport: { once: true },
  };

  return (
    <>
      <Container
        component="section"
        id="about"
        sx={{ height: "100vh", display: { md: "none"} }}
      >

        <Box position="relative">
          <Box
            component={motion.div}
            initial={{...cardVariants.offscreen, y: 50, x: -50}}
            whileInView={{ ...cardVariants.onscreen, y: 200}}
            viewport={cardVariants.viewport}
            margin="auto"
            maxWidth={600}
            justifyContent='center'
            bgcolor='warning.main'
            p={{xs: 3, md: 8, lg: 10}}
            borderRadius={2}
            zIndex={10}
          >
            <Text variant="h2" component="h2" gutterBottom>
              About Me
            </Text>
            <Text variant="body2" whiteSpace="break-spaces" fontSize={{ sm: 16 }}>
              {aboutMeUpdated}
            </Text>
          </Box>

          <Box
            component={motion.div}
            initial={{...cardVariants.offscreen, y: 200, x: 50}}
            whileInView={{ ...cardVariants.onscreen, y: 180}}
            viewport={cardVariants.viewport}
            maxWidth={280}
            zIndex={-10}
            margin="auto"
          >
            <Box
              component="img"
              src={profilePicture}
              alt="Profile Picture"
              borderRadius={2}
            />
          </Box>

        </Box>

      </Container>

      <Container
        component={motion.section}
        id="about"
        sx={{ height: "100vh", display: { xs: "none", md: "revert" }  }}
      >

        <Box position="relative">
          <Box
            component={motion.div}
            initial={{...cardVariants.offscreen, x: -300}}
            whileInView={{ ...cardVariants.onscreen}}
            viewport={cardVariants.viewport}
            margin={{ xs: "auto", md: "initial" }}
            maxWidth={{sm: 600, lg: 750}}
            justifyContent='center'
            bgcolor='warning.main'
            p={{xs: 3, md: 8, lg: 10}}
            borderRadius={2}
            zIndex={10}
          >
            <Text variant="h2" component="h2" gutterBottom>
              About Me
            </Text>

            <Text variant="body2" whiteSpace="break-spaces" fontSize={{ sm: 16 }}>
              {aboutMeUpdated}
            </Text>


          </Box>

          <Box
            component={motion.div}
            initial={{...cardVariants.offscreen, x: 50}}
            whileInView={{ ...cardVariants.onscreen}}
            viewport={cardVariants.viewport}
            position={{ xs: "initial", md: "absolute" }}

            right={0}
            bottom={320}
            width="100%"
            maxWidth={{ sm: 180, md: 500, lg: 600 }}
            zIndex={-10}
          >
            <Box
              component="img"
              src={profilePicture}
              alt="Profile Picture"
              borderRadius={2}
            />
          </Box>

        </Box>

      </Container>

    </>

  )
}


export default About