import { Container, Box, Typography, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
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
        <ImageList sx={{ display: { xs: "none", md: "revert" } }} variant="masonry" cols={3} gap={8}>
          {projects?.map((project, index) =>
            <ImageListItem key={index}>
              <ProjectTile key={index} {...project}/>
              <ImageListItemBar title={project.title} />
            </ImageListItem>


          )}
        </ImageList>

      <ImageList sx={{ display: { md: "none" } }} variant="masonry" cols={2} gap={8} >
        {projects?.map((project, index) =>
          <ImageListItem key={index}>
            <ProjectTile key={index} {...project}/>
            <ImageListItemBar title={project.title} />
          </ImageListItem>


        )}
      </ImageList>
    </Container>
  )
}

export default Projects