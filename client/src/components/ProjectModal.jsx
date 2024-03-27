import React from 'react'
import { Card, CardBody, Heading, Icon, Image, Modal, ModalContent, ModalOverlay, Text, useDisclosure, keyframes, HStack, VStack, Box, UnorderedList, ListItem, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import ProjectPreview from './ProjectPreview.jsx'
import { FaCircleArrowLeft } from 'react-icons/fa6'
import ProjectScreenshots from './ProjectScreenshots.jsx'

const ProjectModal = ({ isOpen, onClose, captions, coverImage, title, images, image, link, github }) => {

  return (
    <Modal isOpen={isOpen} isCentered onClose={onClose}>
      <ModalOverlay>
        <ModalContent placeItems="center" borderRadius="20px">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProjectScreenshots title={title} images={images} />

            <HStack>
              <UnorderedList color="white">
                {captions.map((caption, index) => <ListItem key={index}>{caption}</ListItem>)}
              </UnorderedList>
            </HStack>
          </ModalBody>

        </ModalContent>
      </ModalOverlay>
    </Modal>

  )
}

export default ProjectModal