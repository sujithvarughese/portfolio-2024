import React, { forwardRef, useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { Box, Heading, SimpleGrid, Stack, Text, useColorMode, VStack } from '@chakra-ui/react'
import Section from '../ui/Section.jsx'
import { aboutMe, aboutMe2, aboutMe3 } from '../data/data.js'
import { CustomDivider } from '../ui'
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
    <Section p={{ base: "3", md: "8" }} position="relative">
    <CustomDivider index="1" name="About Me" />
      <Box
        ref={ref}
        position="absolute"
        top="24px"
      ></Box>

      <Stack
        backdropFilter="blur(8px)"
        justifyContent="space-evenly"
        flexDirection={{ base: "column", lg: "row"}}
        padding={1}
        alignItems="center"
        marginY="18px"
      >
        {/*
          <Image
            src={heraMeImage}
            alt="hera+me"
            width="50%"
            maxWidth="700px"
            borderRadius="12px"
            display={{ base: "none", lg: "revert" }}
          />
        */}

        <SimpleGrid>
          <Heading fontSize="24px" fontWeight="200">The creative process has guided me to gain a solid understanding of how a library such as React works <strong>under the hood</strong> which I believe has drastically increased my ability to <strong>create efficiently</strong>.</Heading>
        </SimpleGrid>
        <VStack
          gap={{ base: "24px", xl: "56px" }}
          margin={{ base: "12px", sm: "24px" }}
          fontWeight={500}
        >
          <Text fontWeight="400">{aboutMe}</Text>
          <Text fontWeight="400">{aboutMe2}</Text>
          {/*
            <Image
              src={heraMeImage}
              alt="hera+me"
              width={{ base: "80%", sm: "60%" }}
              borderRadius="12px"
              display={{ lg: "none" }}
            />
          */}

          <Text fontWeight="400">{aboutMe3}</Text>
        </VStack>
      </Stack>

    </Section>
  )
})

export default About