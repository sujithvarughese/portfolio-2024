import { Container, Row, Col, Stack } from 'react-bootstrap'
import classes from "../styles/Projects.module.css"
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import { motion } from "framer-motion"
const Projects = () => {
  return (
    <Container as="section" className={classes.container} id="projects">
        <h2>Projects</h2>

        <Stack className={classes.cards}>
          {projects?.map((project, index) => {
            return (
              <ProjectCard key={index} {...project} index={index}/>
            )
          })}
        </Stack>



    </Container>
  )
}

export default Projects