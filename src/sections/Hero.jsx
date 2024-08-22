import { motion } from "framer-motion"
import { introductionText, descriptionText, fullName, bio, aboutMeUpdated } from '../data/data.js'
import { forwardRef, useEffect, useState } from 'react'
import profilePicture2 from "../assets/images/profile/profile_pic.png"
import Icon from '../components/IconPill.jsx'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { IoLocationSharp } from "react-icons/io5";
import Box from '@mui/material/Box'
import Text from "../components/ui/Text.jsx"
import profilePictureMobile from "../assets/images/profile/profile_pic_small.png"
import { Container, Stack, Grid, Toolbar, Link } from '@mui/material'
import Skills from './Skills.jsx'

import resume from "../assets/images/certificates/resume-2024.pdf"
import diploma from "../assets/images/certificates/diploma.png"
import comptiaCert from "../assets/images/certificates/compTIA_cert.pdf"
import metaCert from "../assets/images/certificates/meta_frontend_cert.pdf"

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

      marginX={{ xs: 1, lg: 12 }}
    >
      <Stack
        flexDirection="row"
        position="relative"
        alignItems="center"
      >
        <Box
          width={{ xs: 320, md: 480 }}
          bgcolor='warning.main'
          py={{xs: 4, md: 16}}
          px={2}
          borderRadius={2}
          position="absolute"
          bottom={{ xs: 24, sm: "revert" }}
          borderTop="black 8px solid"
          borderBottom="black 8px solid"
        >
          <Text fontSize={{ xs: 28, md: 48 }} fontWeight={700}>{currentNameText}</Text>
          <Text variant="h5" fontWeight={600} whiteSpace="break-spaces" py={1}>{currentIntroductionText}</Text>

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
            <Text variant="h6">{currentLocationText}</Text>
          </Stack>

          <Stack
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1.4 } }}
            padding={1}
          >
            <Link href={diploma} className="social-icon" target="_blank" rel="noreferrer" underline="none">
              <Text color="black">Bachelor of Computer Science, 2022</Text>
            </Link>
            <Link href={comptiaCert} className="social-icon" target="_blank" rel="noreferrer" underline="none">
              <Text color="black">CompTIA A+ Certified</Text>
            </Link>
            <Link href={metaCert} className="social-icon" target="_blank" rel="noreferrer" underline="none">
              <Text color="black">Meta Front End Developer Certified</Text>
            </Link>
          </Stack>

        </Box>

        <Box display="flex" justifyContent="center">
          <Box component="img" src={profilePicture2} alt="Profile Picture"
               width="90%"
               display={{ xs: "none", sm: "initial" }}
               zIndex={-10}
               borderRadius={2}
          />
          <Box component="img" src={profilePictureMobile} alt="Profile Picture"
               display={{ sm: "none" }}
               zIndex={-10}
               borderRadius={2}
          />

        </Box>
      </Stack>
      <Skills />

    </Box>
  )
})

export default Hero
