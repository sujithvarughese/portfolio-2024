import { Fab } from '@mui/material'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { NavDropdown } from 'react-bootstrap'
import { PiCertificateFill } from 'react-icons/pi'
import resume from '../assets/images/certificates/resume-2024.pdf'
import diploma from '../assets/images/certificates/diploma.png'
import metaCert from '../assets/images/certificates/meta_frontend_cert.png'
import accountingCert from '../assets/images/certificates/accounting_certificate.png'
import businessManagementCert from '../assets/images/certificates/business_management_cert.png'
import javascriptCert from '../assets/images/certificates/adv_javascript_cert.jpg'
import reactNativeCert from '../assets/images/certificates/react_native_cert.jpg'
import mernCert from '../assets/images/certificates/MERN_2024_cert.jpg'
import Box from '@mui/material/Box'
const emailAddress = "sujith.varug@gmail.com"

export const ActionButtons = () =>
  <Box>
    <NavActionButton />
    <MessageActionButton />
  </Box>

export const NavActionButton = () => {
  return (
    <Fab
      aria-label="nav"
      variant="extended"
      sx={{ position: "sticky", bottom: 16, left: 16, width: 72, height: 72 }}>
      <NavDropdown
        title={<PiCertificateFill size="54px" />}
        autoClose={true}
        drop="up"
      >

        <NavDropdown.Item href={resume} target="_blank" rel="noreferrer">Resume</NavDropdown.Item>
        <NavDropdown.Item href={diploma} target="_blank" rel="noreferrer">Diploma</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={metaCert} target="_blank" rel="noreferrer">Meta Front End Developer</NavDropdown.Item>
        <NavDropdown.Item href={accountingCert} target="_blank" rel="noreferrer">Accounting Technology</NavDropdown.Item>
        <NavDropdown.Item href={businessManagementCert} target="_blank" rel="noreferrer">Business Management</NavDropdown.Item>
        <NavDropdown.Item href={javascriptCert} target="_blank" rel="noreferrer">Advanced Javascript</NavDropdown.Item>
        <NavDropdown.Item href={reactNativeCert} target="_blank" rel="noreferrer">React Native 2024</NavDropdown.Item>
        <NavDropdown.Item href={mernCert} target="_blank" rel="noreferrer">MERN Stack 2024</NavDropdown.Item>
      </NavDropdown>
    </Fab>
  )
}

export const MessageActionButton = () => {
  return (
    <Fab
      href={`mailto:${emailAddress}`} target="_blank" rel="noreferrer"
      aria-label="message"
      variant="extended"
      sx={{ width: 72, height: 72 }}
    >
      <BiMessageRoundedDetail size="64px" />
    </Fab>
    )

}

