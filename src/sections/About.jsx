import { Col, Container, Image, Row, Stack } from 'react-bootstrap'
import classes from '../styles/About.module.css'
import { aboutMeHeadline, aboutMe, aboutMe2, aboutMe3, aboutMeAlt } from '../data/data.js'
import profilePicture from "../assets/images/profile/profile_studio.png"
import { skills } from '../data/data.js'
import Icon from '../components/Icon.jsx'
import { useEffect, forwardRef } from 'react'
import { useGlobalContext } from '../context/GlobalContext.jsx'

const About = forwardRef((props, ref) => {

  const { onUpdateActiveLink } = useGlobalContext()

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        onUpdateActiveLink("about")
      }
    })
    observer.observe(ref.current)
  }, [])

  return (
    <Container
      as="section"
      className={classes.container}
      id="about"
    >
        <h1
          ref={ref}
          style={{ margin: "16px 0" }}
        >About Me</h1>

        <Row className={classes.content}>
          <Col xs={12} lg={6} className={classes.image}>
            <Image src={profilePicture} alt="Profile Picture" />
          </Col>

          <Col xs={12} lg={6} className={`${classes.paragraph}`}>
            <p>{aboutMeAlt}</p>
          </Col>
        </Row>



    </Container>
  )
})

const styles = {

}

export default About