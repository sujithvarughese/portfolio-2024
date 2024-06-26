import { Container, Row, Col, Stack, Image } from 'react-bootstrap'
import classes from '../styles/Hero.module.css'
import { motion } from "framer-motion"
import { ArrowRightCircle, CursorText  } from "react-bootstrap-icons"
import { introductionText, descriptionText, fullName, bio } from "../data/data.js"
import { forwardRef, useEffect, useState } from 'react'
import chessboardImage from "../assets/images/backgrounds/chessboard.png"
import knightImage from "../assets/images/backgrounds/knight.png"
import profilePicture from "../assets/images/profile/profile_square.png"
import profilePicture2 from "../assets/images/profile/profile_pic.png"
import Icon from '../components/Icon.jsx'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { IoLocationSharp } from "react-icons/io5";
import helloImage from '../assets/images/backgrounds/hello-transparent.png'
import Box from '@mui/material/Box'
import profilePictureMobile from "../assets/images/profile/profile_pic_small.png"
const Hero = forwardRef((props, ref) => {

  const { onUpdateActiveLink } = useGlobalContext()

  const [currentNameText, setCurrentNameText] = useState("")
  const [currentIntroductionText, setCurrentIntroductionText] = useState("")
  const [currentLocationText, setCurrentLocationText] = useState("")


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
      } else if (currentLocationText !== "Miami, FL") {
        const updatedWord = updateWord("Miami, FL", currentLocationText)
        setCurrentLocationText(updatedWord)
      }
    }, 45)
    return () => clearTimeout(timer)
  }, [currentNameText, currentIntroductionText, currentLocationText])


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
    <Box p={{ md: 28 }}  style={{ zIndex: 100 }}>
      <h1 style={{ fontSize: 48, fontWeight: 700 }}>{currentNameText}</h1>
      <h2 style={{ fontWeight: 600, whiteSpace: "break-spaces" }}>{currentIntroductionText}</h2>
      <span style={{ display: "flex" }}>
        <motion.div
          initial={{ opacity: 0, y: -1000, x: -50 }}
          animate={{
            opacity: 1, y: 0, x: 0,
            transition: { delay: 3, type: "spring", damp: 350, mass: 0.2, stiffness: 250  }
        }}
        >
          <IoLocationSharp fontSize={28}/>
        </motion.div>
        <h4>{currentLocationText}</h4>
      </span>
    </Box>
    </Container>
  )
})

export default Hero
