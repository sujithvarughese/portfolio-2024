import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle, CursorText  } from "react-bootstrap-icons"
import { introductionText, descriptionText,  } from "../data/data.js"
import { useEffect, useState } from 'react'
import chessBackground from "../assets/images/backgrounds/chess_bg.png"
import chessboardImage from "../assets/images/backgrounds/chessboard.png"
import knightImage from "../assets/images/backgrounds/knight.png"
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
        <Row className="">
          <Col xs={12} md={6} xl={7}>
            <h1>{currentIntroductionText}</h1>
            <h3>{currentDescriptionText}</h3>
          </Col>

          <img src={chessboardImage} alt="chessboard" className="chessboard"/>
          <img src={knightImage} alt="knight" className="knight"/>


        </Row>
      </Container>
    </section>
  )
}

export default Hero