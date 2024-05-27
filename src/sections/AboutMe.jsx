import { Col, Container, Image, Row, Stack } from 'react-bootstrap'
import classes from '../styles/AboutMe.module.css'
import { aboutMeHeadline, aboutMe, aboutMe2, aboutMe3 } from '../data/data.js'
import profilePicture from "../assets/images/profile/profile_studio.png"
import { skills } from '../data/data.js'
import Icon from '../components/Icon.jsx'
import { useEffect, forwardRef } from 'react'
import { useGlobalContext } from '../context/GlobalContext.jsx'

const AboutMe = forwardRef((props, ref) => {

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
        <h2 ref={ref}>About Me</h2>

        <Row className={classes.content}>
          <Col xs={12} lg={6} className={classes.image}>
            <Image src={profilePicture} alt="Profile Picture" />
          </Col>

          <Col className={`${classes.paragraph}`}>
            <p>{aboutMe}</p>
            <p>{aboutMe2}</p>
            <p>{aboutMe3}</p>
          </Col>

          <Col className="col-11 col-lg-6 offset-lg-6 p-3">
            <h4>Skills</h4>
            {skills.map((skill, index) =>
              <Icon
                key={index}
                name={skill}
                variant="secondary"
                styles={{
                  gap: "6px",
                  fontSize: "14px"
                }}
              />
            )}
          </Col>
        </Row>



    </Container>
  )
})

export default AboutMe