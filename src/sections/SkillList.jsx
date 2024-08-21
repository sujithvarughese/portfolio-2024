import { Container, Grid } from '@mui/material'
import { skills } from '../data/data.js'
import IconSkill from '../components/IconSkill.jsx'
import Text from '../components/ui/Text.jsx'
import { motion } from 'framer-motion'

const SkillList = () => {
  return (
    <>
      <Container
        component={motion.section}
        sx={{ display: { sm: "none"} }}
        initial={{ y: 200 }}
        whileInView={{ y: 0}}
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

      <Container
        component={motion.section}
        sx={{ display: { xs: "none", sm: "revert" } }}
        initial={{ y: 200 }}
        whileInView={{ y: 0}}
        transition={{ ease: "easeInOut" }}
      >
        <Text variant="h3" textAlign="center" sx={{ marginBottom: 12 }}>Skills</Text>
        <Grid container>
          {skills.map(skill =>
            <Grid key={skill} item xs={4} md={3}>
              <IconSkill name={skill} />
            </Grid>)}
        </Grid>
      </Container>
    </>

  )
}

export default SkillList