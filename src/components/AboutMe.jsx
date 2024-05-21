import { Col, Container, Row } from 'react-bootstrap'
import { aboutMeHeadline, aboutMe, aboutMe2, aboutMe3 } from '../data/data.js'

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <Container>
        <h2>About Me</h2>
        <Row>
          <Col className="about-text about-highlight">
            The creative process has guided me to gain a solid understanding of how a library such as React works <strong>under the hood</strong> which I believe has drastically increased my ability to <strong>create efficiently</strong>.
          </Col>
          <Col className="about-text about-paragraph">
            <p>{aboutMe}</p>
            <p>{aboutMe2}</p>
            <p>{aboutMe3}</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutMe