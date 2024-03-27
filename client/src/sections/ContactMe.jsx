import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, HStack, Input, Link, Progress, SimpleGrid, Text, Textarea, useColorMode, VStack } from '@chakra-ui/react'
import Section from '../ui/Section.jsx'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { useFormik } from "formik";
import * as Yup from 'yup';
import bg from "../assets/images/bg/AdobeStock_237425533.jpeg"
import bgLight from "../assets/images/bg/AdobeStock_237425533 copy.png"
import emailjs from "@emailjs/browser";
import { CustomDivider } from '../components/index.js'
const credentials = {
  serviceID: import.meta.env.VITE_SERVICE_ID,
  templateID: import.meta.env.VITE_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_PUBLIC_KEY
}
const emailAddress = "sujith.varug@gmail.com"
const ContactMe = forwardRef((props, ref) => {

  const { setActiveLink, showAlert, hideAlert } = useGlobalContext()
  const { colorMode } = useColorMode()
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActiveLink("contact-me")
      }
    })
    observer.observe(ref.current)
  }, [])


  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef()

  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      message: ""
    },
    onSubmit: async (values) => {
      setIsLoading(true)
      console.log(formRef.current)
      try {
        const response = await emailjs.sendForm(credentials.serviceID, credentials.templateID, formRef.current, credentials.publicKey)
        console.log(response)
        if (response.status === 200) {
          showAlert({
            type: 'success',
            message: `Thanks for your message ${values.from_name}. I will get back to you shortly.`,
          })
        }
      } catch (error) {
        showAlert({
          type: 'error',
          message: 'Something went wrong, please try again.',
        })
      } finally {
        setIsLoading(false)
        formik.resetForm()
      }
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("Required"),
      from_email: Yup.string().email("Invalid Email Address").required("Required"),
      message: Yup.string().required("Required")
    })
  });


  return (
    <Section p={{ base: "12px"}} paddingY="24px">
      <Box ref={ref} top="80px"></Box>
      <CustomDivider index="3" name="Connect" />
      <Heading>LET'S CONNECT</Heading>

      <HStack justifyContent="space-between" width="100%">
        <SimpleGrid>
          <Text>Find me Here.</Text>
          <Link>LinkedIn</Link>
          <Link>GitHub</Link>
        </SimpleGrid>
        <SimpleGrid>
          <Text>Feel free to connect with me via email with career guidance or just to chat at <Link href={`mailto:${emailAddress}`}>sujith.varug@gmail.com</Link>.</Text>
        </SimpleGrid>
        <SimpleGrid>
          <Link href={`mailto:${emailAddress}`}>Email Me</Link>
        </SimpleGrid>

      </HStack>

    </Section>
  )
})

export default ContactMe