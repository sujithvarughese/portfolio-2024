import { Heading, HStack, Icon, Link, LinkBox, LinkOverlay, SimpleGrid, Stack, Tag, Text } from '@chakra-ui/react'
import Section from '../ui/Section.jsx'
import { SiMinutemailer } from "react-icons/si"

import { CustomDivider } from '../ui'

const emailAddress = "sujith.varug@gmail.com"
const ContactMe = () => {


  return (
    <Section>
      <CustomDivider index="3" name="Connect" />
      <Heading fontFamily="Saira">LET'S CONNECT</Heading>

      <Stack flexDirection={{ base: "column", sm: "row" }} justifyContent="space-between" gap={8} width="100%">

        <SimpleGrid>
          <Text fontWeight="700" paddingBottom={2}>Find me Here.</Text>
          <Link href={`mailto:${emailAddress}`}>sujith.varug@gmail.com</Link>
          <Link>LinkedIn</Link>
          <Link>GitHub</Link>
        </SimpleGrid>

        <SimpleGrid>
          <Text fontWeight="700" paddingBottom={2}>Reach Out</Text>
          <Text>Feel free to reach out- whether regarding freelance opportunities, career guidance, or just to chat about technology!</Text>
        </SimpleGrid>

        <LinkBox as="article">
          <Tag>
            <HStack>
              <Icon as={SiMinutemailer} />
              <Text>Email Me</Text>
            </HStack>
            <LinkOverlay href={`mailto:${emailAddress}`}></LinkOverlay>
          </Tag>
        </LinkBox>

      </Stack>

    </Section>
  )
}

export default ContactMe