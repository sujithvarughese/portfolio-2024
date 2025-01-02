import { Stack } from '@mui/material'
import Text from "../components/ui/Text.jsx"
import {softwareSkills, fullStackSkills, deploymentSkills } from "../data/data.js"
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { RiStackLine } from "react-icons/ri";
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'



const Skills = () => {

  return (
    <Box as="section" id="skills">
      <Stack flexDirection={{ md: "row" }} gap={2} my={12} mx={2} >

        <Stack component={motion.div} borderLeft={{ md: "solid 6px #1976d2" }} borderBottom={{ xs: "solid 6px #1976d2", md: "none" }}
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 100}}
           transition={{ ease: "easeInOut", duration: 2 }}
           viewport={{ once: true }}
        >
          <Stack flexDirection="row" alignItems="center" justifyContent="center">
            <Box><HiOutlineComputerDesktop size={56} /></Box>
            <Text variant="h4" fontWeight={700}>Programmer.</Text>
          </Stack>
          <Box padding={4} ><Text variant="body1">{softwareSkills}</Text></Box>
        </Stack>

        <Stack component={motion.div} borderLeft={{ md: "solid 6px #1976d2" }} borderBottom={{ xs: "solid 6px #1976d2", md: "none" }}
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 100}}
           transition={{ ease: "easeInOut", duration: 3 }}
           viewport={{ once: true }}
        >
          <Stack flexDirection="row" alignItems="center" justifyContent="center">
            <Box ><RiStackLine size={56} /></Box>
            <Text variant="h4" fontWeight={700}>Developer.</Text>
          </Stack>
          <Box padding={4} ><Text variant="body1">{fullStackSkills}</Text></Box>
        </Stack>

        <Stack component={motion.div} borderLeft={{ md: "solid 6px #1976d2" }} borderBottom={{ xs: "solid 6px #1976d2", md: "none" }}
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 100}}
           transition={{ ease: "easeInOut", duration: 4 }}
           viewport={{ once: true }}
        >
          <Stack flexDirection="row" alignItems="center" justifyContent="center">
            <Box ><AiOutlineDeploymentUnit size={56}/></Box>
            <Text variant="h4" fontWeight={700}>Engineer.</Text>
          </Stack>
          <Box padding={4} ><Text variant="body1">{deploymentSkills}</Text></Box>
        </Stack>

      </Stack>
    </Box>
  )
}

export default Skills