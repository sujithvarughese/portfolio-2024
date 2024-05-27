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

  const [currentIntroductionText, setCurrentIntroductionText] = useState("")
  const [currentDescriptionText, setCurrentDescriptionText] = useState("")

  const [currentIntroductionIndex, setCurrentIntroductionIndex] = useState(2)
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(2)

  let ticker
  const printLetter = () => {

    if (currentIntroductionText === introductionText) {
      ticker = setTimeout(() => {
        const updatedText = descriptionText.substring(0, currentDescriptionIndex)
        setCurrentDescriptionText(prev => updatedText)
        setCurrentDescriptionIndex(prevState => prevState + 1)
      }, 25)
    } else {
      ticker = setTimeout(() => {
        const updatedText = introductionText.substring(0, currentIntroductionIndex)
        setCurrentIntroductionText(prev => updatedText)
        setCurrentIntroductionIndex(prevState => prevState + 1)
      }, 50)
    }
  }

  useEffect(() => {
    if (currentIntroductionText === introductionText) {
      setCurrentDescriptionText("I")
    }
    if (currentIntroductionText.length === 0) {
      const temp = setTimeout(() => {
        setCurrentIntroductionText("M")
        clearTimeout(temp)
      }, 1800)
    } else {
      printLetter()
    }
    return () => clearTimeout(ticker)
  }, [currentIntroductionText])

  useEffect(() => {
    if (currentDescriptionText.length === 0) {
      return
    }
    printLetter()
    return () => clearTimeout(ticker)
  }, [currentDescriptionText])

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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 } }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Welcome.
      </motion.h1>

      <Container
        className={classes.text}>
        <Col xs={12} sm={8} md={6} xl={7}>
          <h1>{currentIntroductionText}</h1>
          <p>{currentDescriptionText}</p>
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
          // drag
          // dragConstraints={{ top: 50, right: 50, bottom: 50, left: 100 }}
          // dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
        />
      </Row>

    </Container>
  )
})

export default Hero