import { Modal, ModalContent, ModalOverlay, HStack, UnorderedList, ListItem, ModalHeader, ModalCloseButton, ModalBody, Container, Text } from '@chakra-ui/react'
import ProjectScreenshots from './ProjectScreenshots.jsx'

const ProjectModal = ({ isOpen, onClose, captions, title, images, desktop, mobile, image, link, github }) => {

  return (
    <Modal isOpen={isOpen} isCentered onClose={onClose} size='xl'>
      <ModalOverlay>
        <ModalContent aria-modal="true" placeItems="center" borderRadius="20px">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProjectScreenshots title={title} images={images} desktop={desktop} mobile={mobile}/>

            <Container margin="auto" width={{ base: "100%", sm: "80%" }}>
              <UnorderedList spacing={4}>
                {captions.map((caption, index) =>
                  <ListItem key={index}>
                    <Text
                      lineHeight="1.4"
                      fontSize="14px"
                    >{caption}
                    </Text>
                  </ListItem>)
                }
              </UnorderedList>
            </Container>
          </ModalBody>

        </ModalContent>
      </ModalOverlay>
    </Modal>

  )
}

export default ProjectModal