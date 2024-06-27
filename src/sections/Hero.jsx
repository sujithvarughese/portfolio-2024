import { motion } from "framer-motion"
import { introductionText, descriptionText, fullName, bio, aboutMeUpdated } from '../data/data.js'
import { forwardRef, useEffect, useState } from 'react'
import profilePicture2 from "../assets/images/profile/profile_pic.png"
import Icon from '../components/Icon.jsx'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { IoLocationSharp } from "react-icons/io5";
import Box from '@mui/material/Box'
import profilePictureMobile from "../assets/images/profile/profile_pic_small.png"
import { Container, Stack, Grid, Typography, Toolbar } from '@mui/material'
const Hero = forwardRef((props, ref) => {


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




  return (
    <Box
      as="section"
      id="home"
      ref={ref}
    >
      <Stack
        flexDirection="row"
        position="relative"
        marginX={{ xs: 1, lg: 12 }}
        height={{ xs: "70vh", sm: "50vh"}}
        alignItems={{xs: "flex-end", sm: "center"}}
      >
        <Box height={{ xs: 240, sm: 320}} width={{ xs: 320, sm: 430 }} bgcolor='warning.main' py={{xs: 4, sm: 8}} px={2}>
          <Typography variant="h4" fontWeight={700} display={{ sm: "none" }}>{currentNameText}</Typography>
          <Typography variant="h3" fontWeight={700} display={{ xs: "none", sm: "initial" }}>{currentNameText}</Typography>
          <Typography variant="h5" fontWeight={600} whiteSpace="break-spaces" py={1}>{currentIntroductionText}</Typography>

          <Stack flexDirection="row" >
            <motion.div
              initial={{ opacity: 0, y: -1000, x: -50 }}
              animate={{
                opacity: 1, y: 0, x: 0,
                transition: { delay: 2, type: "spring", damp: 350, mass: 0.2, stiffness: 250  }
              }}
            >
              <IoLocationSharp fontSize={28}/>
            </motion.div>
            <Typography variant="h6">{currentLocationText}</Typography>
          </Stack>
        </Box>

        <Box component="img" src={profilePicture2} alt="Profile Picture"
          width="80%"
          maxWidth={820}
          position="absolute"
          display={{ xs: "none", sm: "initial" }}
          top={0}
          right={0}
          zIndex={-10}
        />

        <Box component="img" src={profilePictureMobile} alt="Profile Picture"
          width="80%"
          position='absolute'
          top={0}
          right={0}
          display={{ sm: "none" }}
          zIndex={-10}
        />


      </Stack>


    </Box>
  )
})

export default Hero
