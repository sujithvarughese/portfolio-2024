import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from '@mui/material'
import Text from "../components/ui/Text.jsx"
import helloImage from "../assets/images/backgrounds/hello-transparant.png"
import { motion } from 'framer-motion'
const emailAddress = "sujith.varug@gmail.com"

const Contact = () => {
  return (
    <>
      <Container
        component={motion.section} id="contact"
        sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', alignItems: 'center'}}
        initial={{ y: 0 }}
        whileInView={{ y: 300}}
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
          <Text variant="h4" fontSize={24} component="span">
            LET'S CONNECT
          </Text>
        </Link>
        <Text variant="subtitle1" sx={{ my: 3 }}>
          Get in touch! Feedback and inquiries are all welcome.
        </Text>
      </Container>


      <Container
        component={motion.section} id="contact"
        sx={{ display: { xs: "none", sm: 'flex' }, flexDirection: 'column', alignItems: 'center'}}
        initial={{ y: 100 }}
        whileInView={{ y: -100}}
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
    </>

  );
}

export default Contact;