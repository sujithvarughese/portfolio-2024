import { Container, Stack, Typography } from '@mui/material'
import {softwareSkills, fullStackSkills, deploymentSkills } from "../data/data.js"
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { RiStackLine } from "react-icons/ri";
import Box from '@mui/material/Box'



const Skills = () => {

  return (
    <Box as="section" id="skills">
      <Stack flexDirection={{ md: "row" }} gap={2} my={12} mx={2} >

        <Stack borderLeft={{ md: "solid 6px #1976d2" }} borderBottom={{ xs: "solid 6px #1976d2", md: "none" }}>
          <Stack flexDirection="row" alignItems="center" justifyContent="center">
            <Box><HiOutlineComputerDesktop size={56} /></Box>
            <Typography variant="h4" fontWeight={700}>Programmer.</Typography>
          </Stack>
          <Box padding={4} ><Typography variant="body1">{softwareSkills}</Typography></Box>
        </Stack>

        <Stack borderLeft={{ md: "solid 6px #1976d2" }} borderBottom={{ xs: "solid 6px #1976d2", md: "none" }}>
          <Stack flexDirection="row" alignItems="center" justifyContent="center">
            <Box ><RiStackLine size={56} /></Box>
            <Typography variant="h4" fontWeight={700}>Developer.</Typography>
          </Stack>
          <Box padding={4} ><Typography variant="body1">{fullStackSkills}</Typography></Box>
        </Stack>

        <Stack borderLeft={{ md: "solid 6px #1976d2" }} borderBottom={{ xs: "solid 6px #1976d2", md: "none" }}>
          <Stack flexDirection="row" alignItems="center" justifyContent="center">
            <Box ><AiOutlineDeploymentUnit size={56}/></Box>
            <Typography variant="h4" fontWeight={700}>Engineer.</Typography>
          </Stack>
          <Box padding={4} ><Typography variant="body1">{deploymentSkills}</Typography></Box>
        </Stack>

      </Stack>
    </Box>
  )
}

export default Skills