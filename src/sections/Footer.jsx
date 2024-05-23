import { Container, Col, Row } from 'react-bootstrap'
import linkedInIcon from '../assets/icons/linkedin-icon.svg';
import fbIcon from '../assets/icons/fb-icon.svg';
import githubIcon from "../assets/icons/github-mark-white.svg"
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="http://linkedin.com/sujithvarughese" className="social-icon" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="Icon" /></a>
              <a href="http://facebook.com/sujithvarughese" className="social-icon" target="_blank" rel="noreferrer"><img src={fbIcon} alt="Icon" /></a>
              <a href="http://github.com/sujithvarughese" className="social-icon" target="_blank" rel="noreferrer"><img src={githubIcon} alt="Icon" /></a>
            </div>
            <p style={style}>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
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