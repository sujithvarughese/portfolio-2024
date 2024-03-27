import Section from '../ui/Section.jsx'
import React, { forwardRef, useEffect, useRef } from 'react'
import { Box, Container, Heading, HStack, Image, SimpleGrid, Stack, Text, useColorMode, VStack } from '@chakra-ui/react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { projects } from "../data/projects.js";
import ProjectCardFront from "../components/ProjectCardFront.jsx"
import ProjectCard from '../ui/ProjectCard.jsx'
import Project from '../components/Project.jsx'
import bg1 from "../assets/images/bg/AdobeStock_442943212 copy.png"
import bg from "../assets/images/bg/AdobeStock_329681600.png"
import bgLight from "../assets/images/bg/AdobeStock_329681600-light.png"

import bgLightMobile from "../assets/images/bg/AdobeStock_442943212.jpeg"
import { CustomDivider } from '../components/index.js'

const Projects = forwardRef((props, ref) => {

  const { setActiveLink } = useGlobalContext()
  const { colorMode } = useColorMode()

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActiveLink("projects")
      }
    })
    observer.observe(ref.current)
  }, [])

  return (
    <Section
      p={{ base: "3", md: "8" }}
      spacing="8"
    >

      <Box ref={ref} top="80px"></Box>
      <CustomDivider index="2" name="Projects" />

      <SimpleGrid gap="4rem">
        {
          projects.map((project,index) => {
            return (
              <Box
                key={index}
              >
                <Project {...project} index={index}/>
              </Box>
            )
          })
        }
      </SimpleGrid>


    </Section>
  )
})

export default Projects