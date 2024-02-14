import React, { forwardRef, useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { Heading, SimpleGrid, Stack, Text, useColorMode, VStack } from '@chakra-ui/react'
import Section from '../ui/Section.jsx'
import { aboutMe, intro } from '../data/data.js'
import bg from "../assets/images/bg/AdobeStock_237425533.jpeg"
import bgLight from "../assets/images/bg/AdobeStock_274664927.jpeg"

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
      bgImage={colorMode === "dark" ? bg : bgLight}
      bgSize="cover"
      bgPosition="center"
      p={{ base: "3", md: "8" }}
    >
      <Heading ref={ref} paddingTop="80px">About</Heading>
      <SimpleGrid margin={{ base: "8px", sm: "16px" }}>
        <VStack gap="24px" marginY={{ base: "36px", sm: "8" }} marginX={{ base: "12px", sm: "8" }} alignItems="start" maxWidth="520px">
          <Text>{intro}</Text>
          <Text>{aboutMe}</Text>
        </VStack>
      </SimpleGrid>

    </Section>
  )
})

export default About