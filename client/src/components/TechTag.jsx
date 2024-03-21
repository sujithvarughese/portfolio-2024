import React from 'react'
import { Avatar, Tag, TagLabel, TagRightIcon } from '@chakra-ui/react'
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaNode } from "react-icons/fa6";
import { SiMongodb, SiOpenai } from "react-icons/si"

const TechTag = ({ text }) => {
  return (
    <Tag size='xl' variant="solid" p={1} colorScheme="blue">
      <TagLabel>{text}</TagLabel>
      <TagRightIcon as={tags[text]} fontSize="28px"/>
    </Tag>
  )
}

const tags = {
  "JavaScript" : RiJavascriptFill,
  "React": FaReact,
  "NodeJS": FaNode,
  "MongoDB": SiMongodb,
  "OpenAI": SiOpenai

}
export default TechTag