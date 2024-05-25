import { Col, Container, Image, Row, Stack } from 'react-bootstrap'
import classes from '../styles/AboutMe.module.css'
import { aboutMeHeadline, aboutMe, aboutMe2, aboutMe3 } from '../data/data.js'
import profilePicture from "../assets/images/profile/profile_studio.png"

const AboutMe = () => {
  return (
    <section className={classes.aboutMe} id="about">
      <Container>
        <h2>About Me</h2>
        <Container className="d-flex flex-column flex-lg-row justify-content-around">

          {/*<div className={`${classes.text} ${classes.highlight}`}>
            The creative process has guided me to gain a solid understanding of how a library such as React works <strong>under the hood</strong> which I believe has drastically increased my ability to <strong>create efficiently</strong>.
          </div>*/}
          <Container className={`${classes.image}`}>
            <Image src={profilePicture} alt="Profile Picture" />
          </Container>

          <Container className={`${classes.paragraph}`}>
            <p>{aboutMe}</p>
            <p>{aboutMe2}</p>
            <p>{aboutMe3}</p>
          </Container>

        </Container>
      </Container>
    </section>
  )
}

export default AboutMe