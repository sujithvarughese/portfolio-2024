import { Container, Row, Col, Stack } from 'react-bootstrap'
import classes from "../styles/Projects.module.css"
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import { motion } from "framer-motion"
import { useEffect, forwardRef } from 'react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
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
      className={classes.container}
      id="projects"
    >
        <h1
          ref={ref}
          style={{ margin: "16px 0", textAlign: "center" }}
        >Projects
        </h1>

        <Stack className={classes.cards}>
          {projects?.map((project, index) => {
            return (
              <ProjectCard key={index} {...project} index={index}/>
            )
          })}
        </Stack>
    </Container>
  )
})

export default Projects