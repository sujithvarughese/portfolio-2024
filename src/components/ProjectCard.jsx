import React from 'react'
import { Container } from 'react-bootstrap'

const ProjectCard = ({ title, coverImage, coverVideo, heading, link, github, captions, images, tech, image, desktop, mobile, index }) => {
  return (
    <Container className="project-card">
      <img src={coverVideo} alt="gif" />
    </Container>
  )
}

export default ProjectCard