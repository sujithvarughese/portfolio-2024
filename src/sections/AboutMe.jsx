import { Col, Container, Image, Row, Stack } from 'react-bootstrap'
import classes from '../styles/AboutMe.module.css'
import { aboutMeHeadline, aboutMe, aboutMe2, aboutMe3 } from '../data/data.js'
import profilePicture from "../assets/images/profile/profile_studio.png"

const AboutMe = () => {
  return (
    <section className={classes.aboutMe} id="about">
      <Container className="container-fluid">
        <h2>About Me</h2>
        <div className="row">
          <div className="col-12 col-lg-6">

            <div className={`${classes.image} col`}>
              <Image src={profilePicture} alt="Profile Picture" />
            </div>

            <div className={`${classes.paragraph} col`}>
              <p>{aboutMe}</p>
              <p>{aboutMe2}</p>
              <p>{aboutMe3}</p>
            </div>
          </div>

          {/*<div className={`${classes.text} ${classes.highlight}`}>
            The creative process has guided me to gain a solid understanding of how a library such as React works <strong>under the hood</strong> which I believe has drastically increased my ability to <strong>create efficiently</strong>.
          </div>*/}

        </div>
      </Container>
    </section>
  )
}

export default AboutMe