import { Col, Container, Image, Row, Stack } from 'react-bootstrap'
import classes from '../styles/AboutMe.module.css'
import { aboutMeHeadline, aboutMe, aboutMe2, aboutMe3 } from '../data/data.js'
import profilePicture from "../assets/images/profile/profile_studio.png"

const AboutMe = () => {
  return (
    <Container as="section" className={classes.container} id="about">

        <h2>About Me</h2>
        <Row className={classes.content}>
          <Col xs={12} lg={6} className={classes.image}>
            <Image src={profilePicture} alt="Profile Picture" />
          </Col>

          <Col className={`${classes.paragraph}`}>
            <p>{aboutMe}</p>
            <p>{aboutMe2}</p>
            <p>{aboutMe3}</p>
          </Col>
        </Row>

    </Container>
  )
}

export default AboutMe