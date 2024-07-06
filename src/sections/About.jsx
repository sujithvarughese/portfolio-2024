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

  return (
    <Container
      component={motion.section}
      id="about"
      sx={{ height: "100vh" }}
      initial={{ y: 400 }}
      whileInView={{ y: 200}}
      transition={{ ease: "easeInOut" }}
      viewport={{ once: true }}
    >

      <Box position="relative">
          <Box
            margin={{ xs: "auto", md: "initial" }}
            maxWidth={600}
            justifyContent='center'
            bgcolor='warning.main'
            p={{xs: 6, md: 8, lg: 10}}
            borderRadius={2}
          >
            <Text variant="h2" component="h2" gutterBottom>
              About Me
            </Text>
            <Text variant="body2" whiteSpace="break-spaces">
              {aboutMeUpdated}
            </Text>
          </Box>

          <Box
            component="img"
            src={profilePicture}
            alt="Profile Picture"
            position={{ xs: "initial", md: "absolute" }}
            display={{ xs: "none", md: "initial" }}
            right={{ xs: 0, md: 56, lg: 72 }}
            bottom={36}
            width="100%"
            maxWidth={{ md: 400, lg: 600 }}
            zIndex={-10}
            borderRadius={2}
          />
      </Box>

    </Container>
  )
}


export default About