import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons"
const Banner = () => {



  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span>Welcome to my portfolio</span>
            <h1>Hello, I'm Sujith</h1>
            <p>About me paragraph</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner