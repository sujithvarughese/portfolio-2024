import { Container, Box } from '@mui/material'
import { projects } from '../data/projects.js'
import ProjectTile from '../components/ProjectTile.jsx'
const Projects = () => {

  return (
    <Container
      as="section"
      id="projects"
      sx={{ marginTop: "36px" }}
    >
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap' }}>
          {projects?.map((project, index) => {
            return (
              <ProjectTile key={index} {...project}/>
            )
          })}
        </Box>
    </Container>
  )
}

export default Projects