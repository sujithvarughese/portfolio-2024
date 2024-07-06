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
        sx={{ display: { sm: "none" } }}
        initial={{ y: 300 }}
        whileInView={{ y: 100}}
        transition={{ ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Text variant="h4" textAlign="center" sx={{ marginBottom: 16 }}>Projects</Text>

        <Stack gap={{ xs: 8, md: 16 }}>
          {projects.map(project => <Project key={project.title} {...project} />)}
        </Stack>

      </Container>
      <Container
        component={motion.section}
        sx={{ marginY: -32, display: { xs: "none", sm: "revert" } }}
        initial={{ y: 0 }}
        whileInView={{ y: -300}}
        transition={{ ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Text variant="h4" textAlign="center" sx={{ marginBottom: 16 }}>Projects</Text>

        <Stack gap={{ xs: 8, md: 16 }}>
          {projects.map(project => <Project key={project.title} {...project} />)}
        </Stack>

      </Container>
    </>

  )
}

export { Projects as ProjectsTesting }