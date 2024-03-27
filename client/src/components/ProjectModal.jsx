import {  Modal, ModalContent, ModalOverlay,  HStack,  UnorderedList, ListItem, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import ProjectScreenshots from './ProjectScreenshots.jsx'

const ProjectModal = ({ isOpen, onClose, captions, title, images, image, link, github }) => {

  return (
    <Modal isOpen={isOpen} isCentered onClose={onClose}>
      <ModalOverlay>
        <ModalContent placeItems="center" borderRadius="20px">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProjectScreenshots title={title} images={images} />

            <HStack>
              <UnorderedList>
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