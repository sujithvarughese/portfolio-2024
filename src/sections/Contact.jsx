import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from '@mui/material'
import Text from "../components/ui/Text.jsx"
import helloImage from "../assets/images/backgrounds/hello-transparant.png"
const emailAddress = "sujith.varug@gmail.com"

const Contact = () => {
  return (
    <Container
      component="section" id="contact"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
      initial={{ y: 0 }}
      whileInView={{ y: -300}}
      transition={{ ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <Link
        href={`mailto:${emailAddress}`}
        underline="none"
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Text variant="h4" component="span">
          LET'S CONNECT
        </Text>
      </Link>
      <Text variant="subtitle1" sx={{ my: 3 }}>
        Get in touch! Feedback and inquiries are all welcome.
      </Text>
    </Container>
  );
}

export default Contact;