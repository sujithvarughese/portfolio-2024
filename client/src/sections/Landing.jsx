import React, { forwardRef, useEffect, useState } from 'react'
import { Box, Heading, Image,  SimpleGrid, Spinner, Text, useColorMode } from '@chakra-ui/react'
import avatarIMG from "../assets/images/profile/profile_studio.png"
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { Section } from '../ui/index.js'

const Landing = forwardRef((props, ref) => {

  const { setActiveLink } = useGlobalContext()
  const { colorMode } = useColorMode()
  const [imageLoading, setImageLoading] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActiveLink("home")
      }
    })
    observer.observe(ref.current)
  }, [])

  return (
    <Section alignItems="left">

        <Box ref={ref} position="absolute" top="-46px"></Box>

        <Spinner display={imageLoading ? "block" : "none"} size="xl"/>

        <Heading fontFamily="Liu Jian Mao Cao" fontSize="72px">Software Developer</Heading>
        <Box m={12}>
          <Text>I am a software developer based in Miami, FL.</Text>
          <Text>I specialize in JavaScript, React, and NodeJS with OpenAI integration.</Text>
        </Box>

        <Image
          display={imageLoading ? "none" : "block"}
          name="profile"
          src={avatarIMG}
          placeSelf="center"

          marginBottom={{ base: "-9", sm: "1" }}
          width={{ base: "120px", sm: "240px"}}
          height={{ base: "120px", sm: "240px"}}
          onLoad={()=>setImageLoading(false)}
        />

    </Section>
  )
})

export default Landing

//            <>{/*<Avatar marginY="20rem" src={avatarIMG} size="2xl"></Avatar>*/}</>