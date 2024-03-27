import { Box, Divider, HStack, Text, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'

const CustomDivider = ({ index, name }) => {

  const { colorMode } = useColorMode()

  return (
    <HStack justifyContent="space-between" width="100%" whiteSpace="nowrap">
      <Text>{index}</Text>
      <Divider orientation="horizontal" size="xl" borderColor={colorMode === "dark" ? "white" : "gray"}/>
      <Text>{name}</Text>
    </HStack>


  )
}

export default CustomDivider