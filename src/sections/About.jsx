import { Col, Image, Row, Stack } from 'react-bootstrap'
import { Box, Button, Container, Grid, Snackbar, TextField, Typography } from '@mui/material'

import { aboutMeHeadline, aboutMe, aboutMe2, aboutMe3, aboutMeUpdated } from '../data/data.js'
import profilePicture from "../assets/images/profile/hera.png"
import { skills } from '../data/data.js'
import Icon from '../components/Icon.jsx'
import { useEffect, forwardRef } from 'react'
import { useGlobalContext } from '../context/GlobalContext.jsx'

const About = () => {

  return (
    <Container as="section" id="about" sx={{ mt: 16 }}>

      <Box position="relative">
          <Box
            margin={{ xs: "auto", md: "initial" }}
            maxWidth={600}
            justifyContent='center'
            bgcolor='warning.main'
            p={{xs: 6, md: 8, lg: 10}}
            borderRadius={2}
          >
            <Typography variant="h2" component="h2" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body2" whiteSpace="break-spaces">
              {aboutMeUpdated}
            </Typography>
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