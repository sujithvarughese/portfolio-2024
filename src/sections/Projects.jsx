import { Container, Stack } from '@mui/material'
import { projects } from '../data/projects.js'
import Project from "../components/Project.jsx"
import Text from "../components/ui/Text.jsx"
import { motion } from 'framer-motion'
const Projects = () => {
  return (
    <>
      <Container
        component={motion.section}
        id="projects"
        sx={{ display: { sm: "none" }}}
        initial={{ y: 200 }}
        whileInView={{ y: 0}}
        transition={{ ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Text variant="h4" textAlign="center" sx={{ marginBottom: 12 }}>Projects</Text>
        <Stack gap={{ xs: 8, md: 16 }}>
          {projects.map(project => <Project key={project.title} {...project} />)}
        </Stack>
      </Container>

      <Container
        component={motion.section}
        id="projects"
        sx={{ display: { xs: "none", sm: "revert" } }}
        initial={{ y: 200 }}
        whileInView={{ y: 0}}
        transition={{ ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Text variant="h3" textAlign="center" sx={{ marginBottom: 16 }}>Projects</Text>

        <Stack gap={{ xs: 8, md: 16 }}>
          {projects.map(project => <Project key={project.title} {...project} />)}
        </Stack>

      </Container>
    </>

  )
}

export default Projects