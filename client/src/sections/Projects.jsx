import Section from '../ui/Section.jsx'
import { forwardRef, useEffect, useRef } from 'react'
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
      bgImage={colorMode === "dark" ? bg1 : bgLightMobile}
      bgSize="contain"
      bgPosition="center"
    >
      <Heading ref={ref} paddingTop="80px">Projects</Heading>

      <VStack
        display={{ base: "flex", md: "none" }}
        flexWrap="wrap"
        gap="24px"
        justifyContent="space-evenly"
      >
        {
          projects.map((project,index) => {
            return (
            <Box
              key={index}
            >
              <ProjectCard project={project} index={index}/>
            </Box>
            )
          })
        }
      </VStack>

      <VStack
        display={{ base: "none", md: "grid" }}
        gap="10rem"
        marginX="5rem"
        paddingBottom="72px"
      >
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
      </VStack>


    </Section>
  )
})

export default Projects