import React from 'react'
import { Box, Card, CardBody, Container, Heading, Icon, Image, ListItem, SimpleGrid, Text, UnorderedList, useColorMode } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import ProjectPreview from './ProjectPreview.jsx'
import { FaCircleArrowLeft } from 'react-icons/fa6'
import PhoneImageContainer from '../ui/PhoneImageContainer.jsx'
import DesktopMobileImageContainer from '../ui/DesktopMobileImageContainer.jsx'


const ProjectCardBack = ({ captions, images, image, desktop, mobile, link, github, flipCard, index }) => {

  const { colorMode } = useColorMode()

  return (
    <Card
      minHeight="560px"
      onClick={flipCard}
      boxShadow={colorMode === 'dark' ? "2xl" : "dark-lg"}
      bgColor={colorMode === "dark" ? "gray.800" : "white"}
    >
      <CardBody paddingBottom="0" >
        {/*<AnimatePresence>
          <ProjectPreview captions={captions} images={images} />
        </AnimatePresence>*/}

        {
          index === 0 ?


            <SimpleGrid display="flex" >
              <PhoneImageContainer images={images}/>
            </SimpleGrid>

            :
            <SimpleGrid placeItems="center" margin="auto" alignItems="center" justifyItems="center" justifyContent="center">
              {/*<Image src={image} alt="image"></Image>*/}
              <DesktopMobileImageContainer desktop={desktop} mobile={mobile} />
            </SimpleGrid>

        }

        <UnorderedList spacing="3" paddingY="5">
          {
            captions.map((caption, index) => <ListItem key={index}>{caption}</ListItem>)
          }
        </UnorderedList>

      </CardBody>
      <Icon as={FaCircleArrowLeft} fontSize="32px" alignSelf="flex-start" marginBottom="3" marginLeft="3"></Icon>
    </Card>
  )
}

export default ProjectCardBack