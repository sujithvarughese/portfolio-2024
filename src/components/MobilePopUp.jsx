
import { Button, Modal } from '@mui/material'
import Box from '@mui/material/Box'
import Text from './ui/Text.jsx'

const MobilePopUp = ({ open, onClose }) => {

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Text id="modal-modal-title" variant="h6" component="h2">
          Warning
        </Text>
        <Text id="modal-modal-description" sx={{ mt: 2 }}>
          This is a mobile application not designed for desktop. Layouts, icons, and images will not be rendered properly in a web browser. This demo is designed as a general overview and to test functionality.
        </Text>
        <Box component="button" variant="text" sx={{ mt: 2 }} border="none" p={0}><Text variant="subtitle1" fontSize="20px" color="warning.main">Continue to App</Text></Box>
      </Box>
    </Modal>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: 2
};

export default MobilePopUp