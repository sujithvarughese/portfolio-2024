import { forwardRef, useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { Col, Row } from 'react-bootstrap'
import { Container } from "@mui/material"
import {softwareSkills, fullStackSkills, deploymentSkills } from "../data/data.js"
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { RiStackLine } from "react-icons/ri";
import Box from '@mui/material/Box'



const Skills = forwardRef((props, ref) => {

  const { onUpdateActiveLink } = useGlobalContext()
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        onUpdateActiveLink("home")
      }
    })
    observer.observe(ref.current)

  }, [])
  return (
    <Container
      as="section"
      id="skills"
      sx={{ paddingTop: "36px" }}
    >
      <h1 ref={ref} style={{ textAlign: "center" }}></h1>

      <Row>
        <Col xs={12} lg={4} style={{ borderLeft: "solid 6px red" }}>
          <Row style={{ alignItems: "center" }}>
            <Col xs={3}><HiOutlineComputerDesktop size={56} /></Col>
            <Col xs={8}><h3 style={{ fontWeight: 700 }}>Programmer.</h3></Col>
          </Row>
          <Box padding={4} ><h5>{softwareSkills}</h5></Box>
        </Col>

        <Col xs={12} lg={4} style={{ borderLeft: "solid 6px blue" }}>
          <Row style={{ alignItems: "center" }}>
            <Col xs={3}><RiStackLine size={56} /></Col>
            <Col xs={8}><h3 style={{ fontWeight: 700 }}>Developer.</h3></Col>
          </Row>
          <Box padding={4} ><h5>{fullStackSkills}</h5></Box>
        </Col>

        <Col xs={12} lg={4} style={{ borderLeft: "solid 6px green" }}>
          <Row style={{ alignItems: "center" }}>
            <Col xs={3}><AiOutlineDeploymentUnit size={56}/></Col>
            <Col xs={8}><h3 style={{ fontWeight: 700 }}>Engineer.</h3></Col>
          </Row>
          <Box padding={4} ><h5>{deploymentSkills}</h5></Box>
        </Col>

      </Row>

    </Container>
  )
})

export default Skills