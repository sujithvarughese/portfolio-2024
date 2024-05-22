import { Container, Row, Col } from 'react-bootstrap'
import classes from '../styles/Hero.module.css'
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
    <section className={classes.hero} id="home">
      <Container>
        <h1 className={classes.welcome}>Welcome.</h1>
        <Row className={classes.content}>
          <Col xs={12} sm={8} md={6} xl={7}>
            <h1 className={classes.intro}>{currentIntroductionText}</h1>
            <h3 className={classes.description}>{currentDescriptionText}</h3>
          </Col>

          <img src={chessboardImage} alt="chessboard" className={classes.chessboard}/>
          <img src={knightImage} alt="knight" className={classes.knight}/>
        </Row>
      </Container>
    </section>
  )
}

export default Hero