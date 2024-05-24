import { Container, Row, Col, Stack, Image } from 'react-bootstrap'
import classes from '../styles/Hero.module.css'
import { motion } from "framer-motion"
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

      <Container className={classes.container}>
        <motion.h1
          className={classes.tagline}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Welcome.
        </motion.h1>

        <Row className={classes.content}>
          <Col xs={12} sm={8} md={6} xl={7}>
            <h1 className={classes.intro}>{currentIntroductionText}</h1>
            <h3 className={classes.description}>{currentDescriptionText}</h3>
          </Col>
        </Row>

        <Row className={classes.image}>
          <img className={classes.chessboard} src={chessboardImage} alt="chessboard" />

          <motion.img
            className={classes.knight}
            src={knightImage}
            alt="knight"
            drag
            dragConstraints={{ top: 50, right: 50, bottom: 50, left: 100 }}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
          />

        </Row>


      </Container>
    </section>
  )
}

export default Hero