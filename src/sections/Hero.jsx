import { Container, Row, Col, Stack, Image } from 'react-bootstrap'
import classes from '../styles/Hero.module.css'
import { motion } from "framer-motion"
import { ArrowRightCircle, CursorText  } from "react-bootstrap-icons"
import { introductionText, descriptionText, fullName, bio } from "../data/data.js"
import { forwardRef, useEffect, useState } from 'react'
import chessboardImage from "../assets/images/backgrounds/chessboard.png"
import knightImage from "../assets/images/backgrounds/knight.png"
import profilePicture from "../assets/images/profile/profile_square.png"
import Icon from '../components/Icon.jsx'
import { useGlobalContext } from '../context/GlobalContext.jsx'

const Hero = forwardRef((props, ref) => {

  const { onUpdateActiveLink } = useGlobalContext()

  const [currentWelcomeText, setCurrentWelcomeText] = useState("")
  const [currentIntroductionText, setCurrentIntroductionText] = useState("")

  const [currentNameText, setCurrentNameText] = useState("")

  const updateWord = (word, currentWord) => {
    if (word.length === currentWord.length) {
      return currentWord
    }
    return word.substring(0, currentWord.length + 1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentNameText !== fullName) {
        const updatedWord = updateWord(fullName, currentNameText)
        setCurrentNameText(updatedWord)
      } else if (currentIntroductionText !== bio) {
        const updatedWord = updateWord(bio, currentIntroductionText)
        setCurrentIntroductionText(updatedWord)
      }
    }, 45)
    return () => clearTimeout(timer)
  }, [currentNameText, currentIntroductionText])


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
      <Row className={classes.content}>
        <Col className={classes.text} lg={8} xl={7} style={{ placeSelf: "center"}}>
          <h1>{currentNameText}</h1>
          <h2>{currentIntroductionText}</h2>

        </Col>
        <Col as={motion.p}
           xs={12} lg={4}
           className={classes.image}
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.4 } }}
           viewport={{ once: false, amount: 0.5 }}
        >
          <Image src={profilePicture} alt="profile picture" />
        </Col>
      </Row>







    </Container>
  )
})

export default Hero

{/*

       <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.4 } }}
            viewport={{ once: false, amount: 0.5 }}
          >{descriptionText}
      </motion.p>

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
      */}