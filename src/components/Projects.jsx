import { Container, Row, Col } from 'react-bootstrap'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Container>
        <h2>Projects</h2>
        <Container className="project-cards">
          {projects?.map((project, index) => <ProjectCard key={index} {...project} index={index}/>)}
        </Container>

      </Container>

    </section>
  )
}

export default Projects