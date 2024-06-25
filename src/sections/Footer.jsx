import { Container, Col, Row, Stack } from 'react-bootstrap'
import linkedInIcon from '../assets/icons/linkedin-icon.svg';
import fbIcon from '../assets/icons/fb-icon.svg';
import githubIcon from "../assets/icons/github-mark-white.svg"
import sendMessageIcon from "../assets/icons/send-message.svg"
import { emailAddress } from '../data/data.js'

const Footer = () => {
  return (
    <footer className="footer">
      <Stack className="text-center">

        <Stack
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            letterSpacing: 1,
            margin: "24px 0"
          }}
        >
          <h2>Thank you for visiting.</h2>
        </Stack>


        <Stack className="social-icon social-footer">
          <a href={`mailto:${emailAddress}`} target="_blank" rel="noreferrer"><img src={sendMessageIcon} alt="Icon" /></a>
          <a href="http://facebook.com/sujithvarughese" target="_blank" rel="noreferrer"><img src={fbIcon} alt="Icon" /></a>
          <a href="http://github.com/sujithvarughese" target="_blank" rel="noreferrer"><img src={githubIcon} alt="Icon" /></a>
        </Stack>

        <div>
          <p style={style}>Copyright 2024. All Rights Reserved</p>
        </div>


      </Stack>

    </footer>
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