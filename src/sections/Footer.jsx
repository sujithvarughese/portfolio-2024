import { Container, Col, Row, Stack } from 'react-bootstrap'
import linkedInIcon from '../assets/icons/linkedin-icon.svg';
import fbIcon from '../assets/icons/fb-icon.svg';
import githubIcon from "../assets/icons/github-mark-white.svg"
import sendMessageIcon from "../assets/icons/send-message.svg"
import { emailAddress } from '../data/data.js'
import Text from "../components/ui/Text.jsx"
import Box from '@mui/material/Box'

const Footer = () => {
  return (
    <Box component="footer" className="footer" sx={{ paddingTop: { xs: 32 , sm: 36 }  }}>
      <Stack className="text-center">
        <Stack className="social-icon social-footer">
          <a href={`mailto:${emailAddress}`} target="_blank" rel="noreferrer"><img src={sendMessageIcon} alt="Icon" /></a>
          <a href="http://facebook.com/sujithvarughese" target="_blank" rel="noreferrer"><img src={fbIcon} alt="Icon" /></a>
          <a href="http://github.com/sujithvarughese" target="_blank" rel="noreferrer"><img src={githubIcon} alt="Icon" /></a>
        </Stack>

        <div>
          <Text style={style}>Copyright 2024. All Rights Reserved</Text>
        </div>
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