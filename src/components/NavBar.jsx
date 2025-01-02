import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Container, Link } from '@mui/material'
import Text from "../components/ui/Text.jsx"
import linkedInIcon from '../assets/icons/linkedin-icon.svg';
import githubIcon from "../assets/icons/github-mark-white.svg"
import svInitials from "../assets/images/profile/sv.jpeg"
const emailAddress = "sujith.varug@gmail.com"
import resume from "../assets/images/certificates/varughese_resume.pdf"
import diploma from "../assets/images/certificates/diploma.png"
import comptiaCert from "../assets/images/certificates/compTIA_cert.pdf"
import metaCert from "../assets/images/certificates/meta_frontend_cert.png"
import javascriptCert from "../assets/images/certificates/adv_javascript_cert.jpg"
import reactNativeCert from "../assets/images/certificates/react_native_cert.jpg"
import mernCert from "../assets/images/certificates/MERN_2024_cert.jpg"
import accountingCert from "../assets/images/certificates/accounting_certificate.png"
import businessManagementCert from "../assets/images/certificates/business_management_cert.png"
import Box from '@mui/material/Box'

const NavBar = () => {
  return (
    <Navbar>
      <Container sx={{ display: "flex", alignItems: "center"}}>

        <Navbar.Brand href="#home" className="navbar-link">
          <Nav.Link className="navbar-link">
            <Box width={48} display={{ xs: "none", sm: "initial" }} component="img" src={svInitials} alt="SV" ></Box>
          </Nav.Link>
        </Navbar.Brand>

        <Nav className="me-auto" style={{ alignItems: "center"}}>
          <NavDropdown
            title="Certificates"
            id="basic-nav-dropdown"
            menuVariant="dark"
            autoClose={true}
          >
            <NavDropdown.Item href={diploma} target="_blank" rel="noreferrer"><Text fontSize={18}>Bachelor's Diploma</Text></NavDropdown.Item>
            <NavDropdown.Item href={comptiaCert} target="_blank" rel="noreferrer"><Text fontSize={18}>CompTIA A+</Text></NavDropdown.Item>
            <NavDropdown.Item href={metaCert} target="_blank" rel="noreferrer"><Text fontSize={18}>Meta Front End Developer</Text></NavDropdown.Item>
            <NavDropdown.Item href={accountingCert} target="_blank" rel="noreferrer"><Text fontSize={18}>Accounting Technology</Text></NavDropdown.Item>
            <NavDropdown.Item href={businessManagementCert} target="_blank" rel="noreferrer"><Text fontSize={18}>Business Management</Text></NavDropdown.Item>
            <NavDropdown.Item href={javascriptCert} target="_blank" rel="noreferrer"><Text fontSize={18}>Advanced Javascript</Text></NavDropdown.Item>
            <NavDropdown.Item href={reactNativeCert} target="_blank" rel="noreferrer"><Text fontSize={18}>React Native 2024</Text></NavDropdown.Item>
            <NavDropdown.Item href={mernCert} target="_blank" rel="noreferrer"><Text fontSize={18}>MERN Stack 2024</Text></NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href={resume} className="navbar-link" target="_blank" rel="noreferrer">
            <Text fontSize={18}>Resumé</Text>
          </Nav.Link>
        </Nav>

        <Box>
          <span className="navbar-text">
            <Box className="social-icon">
              <a href="https://www.linkedin.com/in/sujithvarughese/" className="social-icon" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="Icon" /></a>
              <a href="http://github.com/sujithvarughese" className="social-icon" target="_blank" rel="noreferrer" style={{ marginLeft: "8px"}}><img src={githubIcon} alt="Icon" /></a>
            </Box>
            <Link as="a" href={`mailto:${emailAddress}`} className="vvd connect" sx={{ marginLeft: 2 }}>
              <Text color="#fefefe">CONTACT ME</Text>
            </Link>
          </span>
        </Box>

      </Container>
    </Navbar>

  )
}

export default NavBar