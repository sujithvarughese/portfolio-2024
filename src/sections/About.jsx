import { Box, Container, Stack } from '@mui/material'
import Text from "../components/ui/Text.jsx"
import { aboutMeUpdated } from '../data/data.js'
import profilePicture from "../assets/images/profile/hera.png"
import { motion } from 'framer-motion'
import santaHatImg from "../assets/images/backgrounds/santa-hat.png"
import { Image } from 'react-bootstrap'

const About = () => {

  const cardVariants = {
    offscreen: {
      y: 50,
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

  return (
    <Container component={motion.section} id="about" sx={{ marginTop: 24, marginBottom: 12 }}>
      <Stack flexDirection={{ xs: "column", md: "row"}} position="relative" alignItems="center">
        <Box
          component={motion.div}
          initial={{...cardVariants.offscreen, x: -50}}
          whileInView={{ ...cardVariants.onscreen}}
          viewport={cardVariants.viewport}
          maxWidth={{xs: 600, lg: 750}}
          bgcolor='warning.main'
          p={{xs: 3, md: 8, lg: 10}}
          borderRadius={3}
          zIndex={10}
        >
          <Box position="absolute" top={-200} left={80} width={280}>
            <Image src={santaHatImg} alt="santa_hat" />
          </Box>
          <Text variant="h2" component="h2" fontSize="28" gutterBottom>
            About Me
          </Text>
          <Text variant="body2" whiteSpace="break-spaces" fontSize={20}>
            {aboutMeUpdated}
          </Text>
        </Box>

        <Box
          component={motion.div}
          initial={{...cardVariants.offscreen, x: 50}}
          whileInView={{ ...cardVariants.onscreen}}
          viewport={cardVariants.viewport}
          maxWidth={{ xs: 360, md: 500, lg: 600 }}
          zIndex={-10}
          marginLeft={{ xs: 0, md: -10 }}
          marginTop={{ xs: -5, md: 0 }}
        >
          <Box
            component="img"
            src={profilePicture}
            alt="Profile Picture"
            borderRadius={3}
          />
        </Box>
      </Stack>

    </Container>



  )
}


export default About