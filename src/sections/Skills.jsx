import { forwardRef, useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { Col, Row } from 'react-bootstrap'
import { Container, Stack } from '@mui/material'
import {softwareSkills, fullStackSkills, deploymentSkills } from "../data/data.js"
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { RiStackLine } from "react-icons/ri";
import Box from '@mui/material/Box'



const Skills = () => {

  return (
    <Box as="section" id="skills">
      <Stack flexDirection={{ sm: "row" }}>

        <Stack sm={4} borderLeft="solid 6px red">
          <Stack flexDirection="row" alignItems="center" justifyContent="center">
            <Box xs={3}><HiOutlineComputerDesktop size={56} /></Box>
            <Box xs={8}><h3 style={{ fontWeight: 700 }}>Programmer.</h3></Box>
          </Stack>
          <Box padding={4} ><h5>{softwareSkills}</h5></Box>
        </Stack>

        <Stack sm={4} borderLeft="solid 6px blue">
          <Stack flexDirection="row" alignItems="center" justifyContent="center">
            <Box xs={3}><RiStackLine size={56} /></Box>
            <Box xs={8}><h3 style={{ fontWeight: 700 }}>Developer.</h3></Box>
          </Stack>
          <Box padding={4} ><h5>{fullStackSkills}</h5></Box>
        </Stack>

        <Stack sm={4} borderLeft="solid 6px green">
          <Stack flexDirection="row" alignItems="center" justifyContent="center">
            <Box xs={3}><AiOutlineDeploymentUnit size={56}/></Box>
            <Box xs={8}><h3 style={{ fontWeight: 700 }}>Engineer.</h3></Box>
          </Stack>
          <Box padding={4} ><h5>{deploymentSkills}</h5></Box>
        </Stack>
      </Stack>

    </Box>
  )
}

export default Skills