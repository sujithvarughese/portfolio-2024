import { Container, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { skills } from '../data/data.js'
import Icon from "./Icon.jsx"
import IconSkill from './ui/IconSkill.jsx'
import Text from './ui/Text.jsx'

const SkillList = () => {
  return (
    <Container component="section">
      <Text variant="h4" textAlign="center">Skills</Text>
      <Grid container>
        {skills.map(skill =>
          <Grid key={skill} item xs={4} md={3}>
            <IconSkill name={skill} />
          </Grid>)}
      </Grid>
    </Container>
  )
}

export default SkillList