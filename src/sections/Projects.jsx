import { Container, Row, Col } from 'react-bootstrap'
import classes from "../styles/Projects.module.css"
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import { motion } from "framer-motion"
const Projects = () => {
  return (
    <motion.section
      className={classes.projects}
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
      viewport={{ once: false }}
    >
      <Container>
        <h2>Projects</h2>

        <Container className={classes.cards}>
          {projects?.map((project, index) => {
            return (
              <ProjectCard key={index} {...project} index={index}/>
            )
          })}
        </Container>

      </Container>

    </motion.section>
  )
}

export default Projects