import { forwardRef, useEffect } from 'react'
import classes from "../styles/Skills.module.css"
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { Col, Container, Row } from 'react-bootstrap'
import {softwareSkills, fullStackSkills, deploymentSkills } from "../data/data.js"
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { RiStackLine } from "react-icons/ri";



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
      className={classes.container}
    >
      <h1 ref={ref}>Skills</h1>

      <Row className={classes.table}>
        <Col xs={12} lg={4}>
          <Row className={classes.row}>
            <Col xs={3}><HiOutlineComputerDesktop size={56} /></Col>
            <Col xs={8} style={{ textDecoration: "underline 6px red" }}><h2>Programming</h2></Col>
          </Row>
          <Container className={classes.paragraph}><h4>{softwareSkills}</h4></Container>
        </Col>

        <Col xs={12} lg={4}>
          <Row className={classes.row}>
            <Col xs={3}><RiStackLine size={56} /></Col>
            <Col xs={8} style={{ textDecoration: "underline 6px blue" }}><h2>Development</h2></Col>
          </Row>
          <Container className={classes.paragraph}><h4>{fullStackSkills}</h4></Container>
        </Col>

        <Col xs={12} lg={4}>
          <Row className={classes.row}>
            <Col xs={3}><AiOutlineDeploymentUnit size={56}/></Col>
            <Col xs={8} style={{ textDecoration: "underline 6px orange" }}><h2>Engineering</h2></Col>
          </Row>
          <Container className={classes.paragraph}><h4>{deploymentSkills}</h4></Container>
        </Col>

      </Row>

    </Container>
  )
})

export default Skills