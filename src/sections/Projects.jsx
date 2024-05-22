import { Container, Row, Col } from 'react-bootstrap'
import classes from "../styles/Projects.module.css"
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

const Projects = () => {
  return (
    <section className={classes.projects} id="projects">
      <Container>
        <h2>Projects</h2>
        <Container className={classes.cards}>
          {projects?.map((project, index) => <ProjectCard key={index} {...project} index={index}/>)}
        </Container>

      </Container>

    </section>
  )
}

export default Projects