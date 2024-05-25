import { Container, Row, Col, Stack, Image } from 'react-bootstrap'
import classes from '../styles/Hero.module.css'
import { motion } from "framer-motion"
import { ArrowRightCircle, CursorText  } from "react-bootstrap-icons"
import { introductionText, descriptionText,  } from "../data/data.js"
import { useEffect, useState } from 'react'
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
    <Container as="section" className={classes.container} id="home">

        <motion.h1
          className={classes.welcome}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Welcome.
        </motion.h1>

        <Row className={classes.text}>
          <Col xs={12} sm={8} md={6} xl={7}>
            <h1>{currentIntroductionText}</h1>
            <p>{currentDescriptionText}</p>
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
  )
}

export default Hero