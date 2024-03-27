import React, { forwardRef, useEffect, useState } from 'react'
import { Box, Heading, Image,  SimpleGrid, Spinner, Text, useColorMode } from '@chakra-ui/react'
import avatarIMG from "../assets/images/profile/profile_studio.png"
import { useGlobalContext } from '../context/GlobalContext.jsx'

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
    <Box paddingTop={{ base: "24px", sm: "52px" }}>
        <SimpleGrid margin={{ base: "8px", sm: "revert" }} px={{ base: "2", md: "16" }}>

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



          {/*
            <VStack
              marginY={{ base: "36px", sm: "8" }}
              marginLeft={{ base: "12px", sm: "8" }}
              alignSelf="flex-end"

              gap="4px"
              width="100%"
            >
              <Heading fontSize="20px" alignSelf={{ base: "flex-end", sm: "flex-start" }} paddingRight={9}>Technical Skills</Heading>
              <UnorderedList
                gap="2px"
                display="grid"
                gridTemplateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr" }}
                alignSelf="stretch"
                styleType="none"
                fontSize={{ base: "14px", sm: "16px" }}
              >
                {
                  skills.map((skill, index) =>
                    <ListItem key={index} display="flex" alignItems="center"><ListIcon as={MdArrowRight}/>{skill}</ListItem>)
                }

              </UnorderedList>
            </VStack>
          */}



        </SimpleGrid>

    </Box>
  )
})

export default Landing

//            <>{/*<Avatar marginY="20rem" src={avatarIMG} size="2xl"></Avatar>*/}</>