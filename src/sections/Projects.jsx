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

        <Container
          as={motion.div}
          className={classes.cards}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.75
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {projects?.map((project, index) => {
            return (
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 }}}
              >
                <ProjectCard key={index} {...project} index={index}/>
              </motion.div>
            )
          })}
        </Container>

      </Container>

    </motion.section>
  )
}

export default Projects