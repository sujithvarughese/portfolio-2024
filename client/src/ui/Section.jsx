import { VStack } from '@chakra-ui/react'

const Section = (props) => {
  return (
    <VStack
      maxWidth="1920px"

      p={{ base: "3", md: "8" }}
      {...props}>
      { props.children }
    </VStack>
  )
}

export default Section