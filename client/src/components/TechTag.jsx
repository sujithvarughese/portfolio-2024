import React from 'react'
import { Tag, TagLabel, TagRightIcon } from '@chakra-ui/react'
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaNode } from "react-icons/fa6";
import { SiMongodb, SiOpenai, SiChakraui, SiStyledcomponents } from "react-icons/si"

const TechTag = ({ text }) => {
  return (
    <Tag size={{base: "sm", sm: 'md'}} variant="solid" p={1} colorScheme="yellow">
      <TagLabel whiteSpace="nowrap">{text}</TagLabel>
      <TagRightIcon as={tags[text]}/>
    </Tag>
  )
}

const tags = {
  "JavaScript" : RiJavascriptFill,
  "React": FaReact,
  "NodeJS": FaNode,
  "MongoDB": SiMongodb,
  "OpenAI": SiOpenai,
  "ChakraUI": SiChakraui,
  "Styled Components": SiStyledcomponents,

}
export default TechTag