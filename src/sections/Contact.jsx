import Container from '@mui/material/Container';
import { Link } from '@mui/material'
import Text from "../components/ui/Text.jsx"
import { motion } from 'framer-motion'
const emailAddress = "sujith.varug@gmail.com"

const Contact = () => {
  return (
    <Container
      component={motion.section} id="contact"
      sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', paddingTop: "24px"}}
      viewport={{ once: true }}
    >
      <Link
        href={`mailto:${emailAddress}`}
        underline="none"
        initial={{ scale: 0.6 }}
        whileInView={{ scale: 1, transition: { ease: "easeInOut", duration: 1 } }}
        viewport={{ once: true }}
        sx={{
          border: '4px solid currentColor',
          borderRadius: 3,
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
  );
}

export default Contact;