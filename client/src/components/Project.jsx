import { Button, ButtonGroup, Heading, HStack, Image, Link, SimpleGrid, Text, useColorMode, useDisclosure } from '@chakra-ui/react'
import ProjectModal from "./ProjectModal.jsx"
import { TechTag } from './index.js'
const Project = ({ title, coverImage, heading, link, github, captions, images, tech, image, desktop, mobile, index }) => {
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const direction = index % 2 === 0 ? "row" : "row-reverse"

  return (
    <SimpleGrid>
      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        captions={captions}
        coverImage={coverImage}
        title={title}
        images={images}
        desktop={desktop}
        mobile={mobile}
        image={image}
        link={link}
        github={github}
      />
      <HStack>


        <Image src={coverImage} display={{ base: "none", sm: "flex" }} width="320px" borderRadius="10px"/>

        <SimpleGrid gap={4}>
          <HStack>
            <Image src={coverImage} display={{ base: "flex", sm: "none" }} width="120px" borderRadius="10px"/>
            <Button fontFamily="Signika Negative" onClick={onOpen} fontSize="28px" textTransform="capitalize" variant="unstyled">{title}</Button>
          </HStack>


          <HStack flexWrap="wrap">{tech.map(item => <TechTag key={item} text={item}/>)}</HStack>

          <Text>{heading}</Text>

          <ButtonGroup size="sm" color={colorMode === "dark" ? "#F6E05E" : "#2B6CB0"}>
            <Link
              border={colorMode === "dark" ? "#F6E05E 2px solid" : "#2B6CB0 2px solid"}
              borderRadius="5px"
              padding="5px"
              textAlign="center"
              _hover={{ fontWeight: "600" }}
              href={link} target="_blank" rel="noreferrer"
            >
              Launch Demo
            </Link>
            <Link
              border={colorMode === "dark" ? "#F6E05E 2px solid" : "#2B6CB0 2px solid"}
              borderRadius="5px"
              padding="5px"
              textAlign="center"
              _hover={{ fontWeight: "600" }}
              href={github} target="_blank" rel="noreferrer"
            >
              View Code
            </Link>
          </ButtonGroup>
        </SimpleGrid>

      </HStack>
    </SimpleGrid>






  )
}

export default Project