import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons"
import { useEffect, useState } from 'react'
const Banner = () => {
  const fullText = "Hello, my name is Sujith."
  const textLine1 = "I am a software developer based out of Miami, FL"
  const textLine2 = "I create web and mobile applications, specializing in JavaScript, React, React Native, OpenAI integration, and prompt engineering."
  const [text, setText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(1)

  useEffect(() => {
    const delta = Math.random() * 100
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