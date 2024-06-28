import { Container, Box, Typography } from '@mui/material'
import { projects } from '../data/projects.js'
import ProjectTile from '../components/ProjectTile.jsx'
import { useState } from 'react'
const Projects = () => {

  return (
    <Container
      as="section"
      id="projects"
      sx={{ marginTop: "36px" }}
    >
      <Typography variant="h4" textAlign="center">Projects</Typography>
        <Box mt={2} display='flex' flexWrap='wrap' borderRadius={2} overflow="hidden">
          {projects?.map((project, index) => {
            return (
              <ProjectTile key={index} {...project}/>
            )
          })}
        </Box>
    </Container>
  )
}

export default Projects