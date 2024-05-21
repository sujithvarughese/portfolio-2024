import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons"
import { useEffect, useState } from 'react'
const Banner = () => {
  const fullText = "Hello, my name is Sujith"
  const [text, setText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(1)
  const [delta, setDelta] = useState(Math.random() * 100)

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    return () => clearInterval(ticker)
  }, [text])

  const tick = () => {
    const updatedText = fullText.substring(0, currentTextIndex)
    setText(prev => updatedText)
    setCurrentTextIndex(prevState => prevState + 1)
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span>Welcome to my portfolio</span>
            <h1>{text}</h1>
            <p>About me paragraph</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner