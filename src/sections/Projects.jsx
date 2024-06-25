import { Container, Box } from '@mui/material'
import classes from "../styles/Projects.module.css"
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import { motion } from "framer-motion"
import { useEffect, forwardRef } from 'react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import ProjectTile from '../components/ProjectTile.jsx'
const Projects = forwardRef((props, ref) => {

  const { onUpdateActiveLink } = useGlobalContext()

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        onUpdateActiveLink("projects")
      }
    })
    observer.observe(ref.current)
  }, [])

  return (
    <Container
      as="section"
      id="projects"
    >
        <h1 ref={ref} style={{ textAlign: "center" }}>Projects</h1>

        <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
          {projects?.map((project, index) => {
            return (
              <ProjectTile key={index} {...project}/>
            )
          })}
        </Box>
    </Container>
  )
})

export default Projects