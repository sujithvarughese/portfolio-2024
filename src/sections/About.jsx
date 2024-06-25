import { Col, Image, Row, Stack } from 'react-bootstrap'
import { Box, Button, Container, Grid, Snackbar, TextField, Typography } from '@mui/material'

import { aboutMeHeadline, aboutMe, aboutMe2, aboutMe3, aboutMeUpdated } from '../data/data.js'
import profilePicture from "../assets/images/profile/me_hera.png"
import { skills } from '../data/data.js'
import Icon from '../components/Icon.jsx'
import { useEffect, forwardRef } from 'react'
import { useGlobalContext } from '../context/GlobalContext.jsx'

const About = forwardRef((props, ref) => {

  const { onUpdateActiveLink } = useGlobalContext()

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        onUpdateActiveLink("about")
      }
    })
    observer.observe(ref.current)
  }, [])

  return (
    <Container
      as="section"
      id="about"
      sx={{ mt: 24, display: 'flex' }}
    >
        <h1
          ref={ref}
          style={{ margin: "16px 0", textAlign: "center" }}
        ></h1>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'warning.main',
              py: 8,
              px: 3,
            }}
          >
            <Box sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body2" whiteSpace="break-spaces">
                {aboutMeUpdated}
              </Typography>
            </Box>

          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >

          <Box
            component="img"
            src={profilePicture}
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -62,
              left: -62,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>




    </Container>
  )
})

const styles = {

}

export default About