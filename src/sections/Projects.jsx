import { Container, Stack } from '@mui/material'
import { projects } from '../data/projects.js'
import Project from "../components/Project.jsx"
import Text from "../components/ui/Text.jsx"
import { motion } from 'framer-motion'
const Projects = () => {

  return (
    <Container
      component={motion.section}
      id="projects"
      initial={{ y: 50 }}
      whileInView={{ y: 0}}
      transition={{ ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <Text variant="h3" textAlign="center" sx={{ marginBottom: 4 }}>Projects</Text>

      <Stack gap={{ xs: 8, md: 16 }}>
        {projects.map(project => <Project key={project.title} {...project} />)}
      </Stack>
    </Container>
  )
}

export default Projects