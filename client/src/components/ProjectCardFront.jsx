import { Box, Button, ButtonGroup, Card, CardBody, CardHeader, Heading, HStack, Icon, Image, Link, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import { FaCircleArrowRight } from "react-icons/fa6";
import {IoLogoGithub, IoRocketSharp} from "react-icons/io5";
const ProjectCardFront = ({ title, coverImage, heading, link, github, flipCard }) => {

  return (
    <Card minHeight="560px" borderRadius="11px" boxShadow="dark-lg" onClick={flipCard}>
      <Image src={coverImage} alt="cover" borderRadius="10px"></Image>

      <CardBody display="flex" flexDir="column" justifyContent="space-around">
        <Heading fontSize="20px">{title}</Heading>
        <Text color="gray.500">{heading}</Text>

        <ButtonGroup fontSize="24px" justifyContent="space-around" placeItems="center" marginTop="10px" >
          <Link href={link} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}><HStack><IoRocketSharp /><Text>Demo</Text></HStack></Link>
          <Link href={github} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}><HStack><IoLogoGithub /><Text>Code</Text></HStack></Link>
        </ButtonGroup>
      </CardBody>



        <Icon as={FaCircleArrowRight} fontSize="32px" alignSelf="flex-end" marginBottom="3" marginRight="3"></Icon>


    </Card>





  )
}

export default ProjectCardFront