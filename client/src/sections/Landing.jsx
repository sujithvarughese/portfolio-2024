import React, { forwardRef, useEffect } from 'react'
import Section from '../ui/Section.jsx'
import { Avatar, Box, Container, Heading, HStack, Icon, ListIcon, ListItem, SimpleGrid, Stack, Text, UnorderedList, useColorMode, VStack } from '@chakra-ui/react'
import { MdArrowRight, MdLocationPin } from "react-icons/md";

import avatarIMG from "../assets/images/profile/profile.png"
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { skills } from "../data/data.js";
import bgChessKingPawn from "../assets/images/backgrounds/chess-pawn-king1.png"
import bgChessKingPawnLight from "../assets/images/backgrounds/chess-pawn-king1-light.png"

const Landing = forwardRef((props, ref) => {

  const { setActiveLink } = useGlobalContext()
  const { colorMode } = useColorMode()

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActiveLink("home")
      }
    })
    observer.observe(ref.current)
  }, [])

  return (
    <Section
      bgImage={colorMode === "dark" ? bgChessKingPawn : bgChessKingPawnLight}
      bgSize="cover"
      bgPosition="center"
      paddingTop={{ base: "24px", sm: "52px" }}
    >
        <SimpleGrid margin={{ base: "8px", sm: "16px" }}>

          <Box ref={ref} position="absolute" top="-46px"></Box>

          <Heading fontSize={{ base: "28px", sm: "64px" }}>Welcome.</Heading>

          <VStack alignItems="flex-end" gap={{ base: "0", sm: "8px" }}>
            <HStack alignItems="flex-end">
              <Heading fontSize={{ base: "18px", sm: "22px" }} fontWeight="500" marginY="4px" color={colorMode === "dark" ? "#F6E05E" : "#2B6CB0"}>My name is</Heading>
              <Heading fontSize={{ base: "28px", sm: "36px" }}>Sujith Varughese.</Heading>
            </HStack>

            <Heading  fontSize={{ base: "18px", sm: "22px" }} fontWeight="500" >Software Developer</Heading>

            <HStack gap="0" alignItems="flex-end">
              <Icon as={MdLocationPin} fontSize={{ base: "28px", sm: "32px" }} />
              <Heading fontSize={{ base: "16px", sm: "18px" }} fontWeight="400">Miami, FL</Heading>
            </HStack>
          </VStack>


          <VStack marginY={{ base: "36px", sm: "8" }} marginX={{ base: "12px", sm: "8" }} gap="0" alignItems="start" maxWidth="520px">

            <VStack marginTop={{ base: "40px", sm: "120px" }} alignSelf="flex-end" alignItems="flex-start" gap="4px">
              <Heading fontSize="20px" >Technical Skills</Heading>
              <UnorderedList
                gap="2px"
                display="grid"
                gridTemplateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr" }}
                alignSelf="stretch"
                styleType="none"
                fontSize={{ base: "14px", sm: "16px" }}
              >
                {
                  skills.map((skill, index) =>
                    <ListItem key={index} display="flex" alignItems="center"><ListIcon as={MdArrowRight}/>{skill}</ListItem>)
                }

              </UnorderedList>
            </VStack>



          </VStack>
        </SimpleGrid>

    </Section>
  )
})

export default Landing

//            <>{/*<Avatar marginY="20rem" src={avatarIMG} size="2xl"></Avatar>*/}</>