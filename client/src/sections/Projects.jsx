import Section from '../ui/Section.jsx'
import { forwardRef, useEffect } from 'react'
import { Box, SimpleGrid, useColorMode } from '@chakra-ui/react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { projects } from "../data/projects.js";
import Project from '../components/Project.jsx'
import { CustomDivider } from '../ui'

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