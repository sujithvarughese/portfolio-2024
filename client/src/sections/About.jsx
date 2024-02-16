import React, { forwardRef, useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { Box, Heading, HStack, Image, SimpleGrid, Stack, Text, useColorMode, VStack } from '@chakra-ui/react'
import Section from '../ui/Section.jsx'
import { aboutMe, aboutMe2, aboutMe3 } from '../data/data.js'
import heraMeImage from "../assets/images/profile/me_hera.png"
import bg from "../assets/images/bg/AdobeStock_329681600.png"
import bgLight from "../assets/images/bg/AdobeStock_237425533 copy.png"
import bgLight1 from "../assets/images/bg/AdobeStock_329681600-light.png"
const About = forwardRef((props, ref) => {

  const { setActiveLink } = useGlobalContext()

  const { colorMode } = useColorMode()
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActiveLink("about")
      }
    })
    observer.observe(ref.current)
  }, [])

  return (
    <Section
      bgImage={colorMode === "dark" ? bg : bgLight1}
      bgSize="cover"
      bgPosition="center"
      p={{ base: "3", md: "8" }}
      position="relative"
    >

      <Box
        ref={ref}
        position="absolute"
        top="24px"
      ></Box>

      <Heading margin="0 auto" paddingTop="80px">About Me</Heading>
      <Stack
        backdropFilter="blur(8px)"
        justifyContent="space-evenly"
        width="100%"
        flexDirection={{ base: "column", lg: "row"}}
        padding={1}
        alignItems="center"
        marginY="18px"
      >

        <Image
          src={heraMeImage}
          alt="hera+me"
          width="50%"
          maxWidth="700px"
          borderRadius="12px"
          display={{ base: "none", lg: "revert" }}
        />

        <VStack
          gap={{ base: "24px", xl: "56px" }}
          margin={{ base: "12px", sm: "24px" }}
          fontWeight={500}
          lineHeight={{ base: "1.5", sm: "2" }}
        >
          <Text>{aboutMe}</Text>
          <Text>{aboutMe2}</Text>
          <Image
            src={heraMeImage}
            alt="hera+me"
            width={{ base: "80%", sm: "60%" }}
            borderRadius="12px"
            display={{ lg: "none" }}
          />
          <Text>{aboutMe3}</Text>
        </VStack>
      </Stack>

    </Section>
  )
})

export default About