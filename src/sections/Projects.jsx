import { Container, Stack } from '@mui/material'
import { projects } from '../data/projects.js'
import Project from "../components/Project.jsx"
import Text from "../components/ui/Text.jsx"
const Projects = () => {
  return (
    <Container sx={{ marginBottom:56 }}>
      <Text variant="h4" textAlign="center" sx={{ marginBottom: 16 }}>Projects</Text>

      <Stack gap={{ xs: 8, md: 16 }}>
        {projects.map(project => <Project key={project.title} {...project} />)}
      </Stack>

    </Container>
  )
}

export { Projects as ProjectsTesting }