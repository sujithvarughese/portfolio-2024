import { Container, Stack } from '@mui/material'
import { projects } from '../data/projects.js'
import Project from "../components/Project.jsx"
import Text from "../components/ui/Text.jsx"
const Projects = () => {
  return (
    <Container>
      <Text variant="h4" textAlign="center">Projects</Text>

      <Stack gap={16}>
        {projects.map(project => <Project key={project.title} {...project} />)}
      </Stack>

    </Container>
  )
}

export { Projects as ProjectsTesting }