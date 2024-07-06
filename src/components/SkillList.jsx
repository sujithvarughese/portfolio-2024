import { Container, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { skills } from '../data/data.js'
import Icon from "./Icon.jsx"
import IconSkill from './ui/IconSkill.jsx'
import Text from './ui/Text.jsx'
import { motion } from 'framer-motion'

const SkillList = () => {
  return (
    <Container
      component={motion.section}
      sx={{ height:"100vh" }}
      initial={{ y: 0 }}
      whileInView={{ y: -300}}
      transition={{ ease: "easeInOut" }}
    >
      <Text variant="h4" textAlign="center" sx={{ marginBottom: 12 }}>Skills</Text>
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