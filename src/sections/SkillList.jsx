import { Container, Grid } from '@mui/material'
import { skills } from '../data/data.js'
import IconSkill from '../components/IconSkill.jsx'
import Text from '../components/ui/Text.jsx'
import { motion } from 'framer-motion'

const SkillList = () => {
  return (
    <Container
      component={motion.section}
      initial={{ y: 200 }}
      whileInView={{ y: 0}}
      transition={{ ease: "easeInOut" }}
    >
      <Text variant="h3" textAlign="center" mb={2}>Skills</Text>
      <Grid container>
        {skills.map(skill =>
          <Grid key={skill} item xs={3}>
            <IconSkill name={skill} />
          </Grid>)}
      </Grid>
    </Container>

  )
}

export default SkillList