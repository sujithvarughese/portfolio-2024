import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { Box, Heading, HStack, Link, SimpleGrid, Text, useColorMode } from '@chakra-ui/react'
import Section from '../ui/Section.jsx'
import { useGlobalContext } from '../context/GlobalContext.jsx'

import { CustomDivider } from '../ui'

const credentials = {
  serviceID: import.meta.env.VITE_SERVICE_ID,
  templateID: import.meta.env.VITE_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_PUBLIC_KEY
}
const emailAddress = "sujith.varug@gmail.com"
const ContactMe = forwardRef((props, ref) => {

  const { setActiveLink, showAlert, hideAlert } = useGlobalContext()
  const { colorMode } = useColorMode()
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActiveLink("contact-me")
      }
    })
    observer.observe(ref.current)
  }, [])


  return (
    <Section p={{ base: "12px"}} paddingY="24px">
      <Box ref={ref} top="80px"></Box>
      <CustomDivider index="3" name="Connect" />
      <Heading>LET'S CONNECT</Heading>

      <HStack justifyContent="space-between" width="100%">
        <SimpleGrid>
          <Text>Find me Here.</Text>
          <Link>LinkedIn</Link>
          <Link>GitHub</Link>
        </SimpleGrid>
        <SimpleGrid>
          <Text>Feel free to connect with me via email with career guidance or just to chat at <Link href={`mailto:${emailAddress}`}>sujith.varug@gmail.com</Link>.</Text>
        </SimpleGrid>
        <SimpleGrid>
          <Link href={`mailto:${emailAddress}`}>Email Me</Link>
        </SimpleGrid>

      </HStack>

    </Section>
  )
})

export default ContactMe