import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle, CursorText  } from "react-bootstrap-icons"
import { introductionText, descriptionText,  } from "../data/data.js"
import { useEffect, useState } from 'react'
const Hero = () => {

  const [currentIntroductionText, setCurrentIntroductionText] = useState("")
  const [currentDescriptionText, setCurrentDescriptionText] = useState("")

  const [currentIntroductionIndex, setCurrentIntroductionIndex] = useState(1)
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(1)

  useEffect(() => {
    let ticker
    if (currentIntroductionText === introductionText) {
      ticker = setInterval(() => {
        const updatedText = descriptionText.substring(0, currentIntroductionIndex)
        setCurrentDescriptionText(prev => updatedText)
        setCurrentIntroductionIndex(prevState => prevState + 1)
      }, 25)
    } else {
      ticker = setInterval(() => {
        const updatedText = introductionText.substring(0, currentDescriptionIndex)
        setCurrentIntroductionText(prev => updatedText)
        setCurrentDescriptionIndex(prevState => prevState + 1)
      }, 50)
    }
    return () => clearInterval(ticker)
  }, [currentIntroductionText, currentDescriptionText])


  return (
    <section className="hero" id="home">
      <Container>
        <h1 className="welcome">Welcome.</h1>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>{currentIntroductionText}</h1>
            <h3>{currentDescriptionText}</h3>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero