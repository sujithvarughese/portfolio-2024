import { Container, Row, Col, Stack, Image } from 'react-bootstrap'
import classes from '../styles/Hero.module.css'
import { motion } from "framer-motion"
import { ArrowRightCircle, CursorText  } from "react-bootstrap-icons"
import { introductionText, descriptionText,  } from "../data/data.js"
import { forwardRef, useEffect, useState } from 'react'
import chessboardImage from "../assets/images/backgrounds/chessboard.png"
import knightImage from "../assets/images/backgrounds/knight.png"
import { skills } from '../data/data.js'
import Icon from '../components/Icon.jsx'
import { useGlobalContext } from '../context/GlobalContext.jsx'

const Hero = forwardRef((props, ref) => {

  const { onUpdateActiveLink } = useGlobalContext()

  const [currentWelcomeText, setCurrentWelcomeText] = useState("")
  const [currentIntroductionText, setCurrentIntroductionText] = useState("")

  const updateWord = (word, currentWord) => {
    if (word.length === currentWord.length) {
      return currentWord
    }
    return word.substring(0, currentWord.length + 1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWelcomeText !== "Welcome.") {
        const updatedWord = updateWord("Welcome.", currentWelcomeText)
        setCurrentWelcomeText(updatedWord)
      } else if (currentIntroductionText !== introductionText) {
        const updatedWord = updateWord(introductionText, currentIntroductionText)
        setCurrentIntroductionText(updatedWord)
      }
    }, 45)
    return () => clearTimeout(timer)
  }, [currentWelcomeText, currentIntroductionText])


  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        onUpdateActiveLink("home")
      }
    })
    observer.observe(ref.current)
  }, [])

  return (
    <Container
      as="section"
      className={classes.container}
      id="home"
      ref={ref}
    >

      <motion.h1
        className={classes.welcome}
      >
        {currentWelcomeText}
      </motion.h1>

      <Container className={classes.text}>
        <Col xs={12} sm={8} md={6} xl={7}>
          <h1>{currentIntroductionText}</h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.4 } }}
            viewport={{ once: false, amount: 0.5 }}
          >{descriptionText}</motion.p>
        </Col>
      </Container>

      <Row className={classes.image}>

        <motion.div>
          <img className={classes.chessboard} src={chessboardImage} alt="chessboard" />
        </motion.div>

        <motion.img
          className={classes.knight}
          src={knightImage}
          alt="knight"
          // animate={{ opacity: [0.6, 1, 1], x: [-110, -220, 0], y: [-55, 0, 0], scale: [0.7, 1, 1] }}
          // transition={{ times: [0, 0.5, 1], duration: 2 }}
          // drag
          // dragConstraints={{ top: 50, right: 50, bottom: 50, left: 100 }}
          // dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
        />
      </Row>

    </Container>
  )
})

export default Hero