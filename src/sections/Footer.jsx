import { Stack } from 'react-bootstrap'
import linkedInIcon from '../assets/icons/linkedin-icon.svg';
import githubIcon from "../assets/icons/github-mark-white.svg"
import sendMessageIcon from "../assets/icons/send-message.svg"
import { emailAddress } from '../data/data.js'
import Text from "../components/ui/Text.jsx"
import Box from '@mui/material/Box'

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Stack className="text-center">
        <Stack className="social-icon social-footer">
          <a href={`mailto:${emailAddress}`} target="_blank" rel="noreferrer" style={{ marginRight: 6 }}><img src={sendMessageIcon} alt="Icon" /></a>
          <a href="https://www.linkedin.com/in/sujithvarughese/" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="Icon" /></a>
          <a href="http://github.com/sujithvarughese" target="_blank" rel="noreferrer" style={{ marginLeft: 6 }}><img src={githubIcon} alt="Icon" /></a>
        </Stack>
        <Text style={style}>Copyright 2025. All Rights Reserved</Text>
      </Stack>
    </Box>
  )
}

const style = {
  fontWeight: "400",
  fontSize: "14px",
  color: "#B8B8B8",
  letterSpacing: "0.5px",
  marginTop: "20px",
}
export default Footer