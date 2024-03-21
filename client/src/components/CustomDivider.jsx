import { Box, Divider, HStack, Text } from '@chakra-ui/react'

const CustomDivider = ({ index, name }) => {
  return (

    <HStack justifyContent="space-between" width="100%" whiteSpace="nowrap">
      <Text>{index}</Text>
      <Divider orientation="horizontal" size="xl"/>
      <Text>{name}</Text>
    </HStack>


  )
}

export default CustomDivider