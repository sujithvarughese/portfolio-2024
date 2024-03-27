import { Heading, HStack, Link, SimpleGrid, Text } from '@chakra-ui/react'
import Section from '../ui/Section.jsx'


import { CustomDivider } from '../ui'

const emailAddress = "sujith.varug@gmail.com"
const ContactMe = () => {


  return (
    <Section>
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
}

export default ContactMe