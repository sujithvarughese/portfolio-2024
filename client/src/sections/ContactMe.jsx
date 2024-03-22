import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Progress, Text, Textarea, useColorMode, VStack } from '@chakra-ui/react'
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
      {isLoading && <Progress isIndeterminate />}
      <Box ref={ref} top="80px"></Box>
      <CustomDivider index="3" name="Contact Me" />

        <Box paddingX={{ base: "36px", sm: "24px" }} maxWidth="600px" fontSize={{ base: "14px", md: "20px" }}>
          <Box display="flex"><Text>Feel free to connect with me for freelance work, career guidance, or any general feedback!</Text></Box>
        </Box>
        <Box width="100%" p="6" maxWidth="800px">
          <form ref={formRef} onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.from_name && formik.touched.from_name}>
                <FormLabel htmlFor="from_name">Name</FormLabel>
                <Input
                  id="from_name"
                  name="from_name"
                  type="text"
                  onBlur={formik.handleBlur}
                  value={formik.values.from_name}
                  onChange={formik.handleChange}
                  border={colorMode === "dark" ? "gray solid 1px" : "black solid 1px"}
                  backdropFilter="blur(12px)"
                />
                <FormErrorMessage>{formik.errors.from_name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.from_email && formik.touched.from_email}>
                <FormLabel htmlFor="from_email">Email Address</FormLabel>
                <Input
                  id="from_email"
                  name="from_email"
                  type="email"
                  onBlur={formik.handleBlur}
                  value={formik.values.from_email}
                  onChange={formik.handleChange}
                  border={colorMode === "dark" ? "gray solid 1px" : "black solid 1px"}
                  backdropFilter="blur(12px)"
                />
                <FormErrorMessage>{formik.errors.from_email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.message && formik.touched.message}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  height={250}
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  border={colorMode === "dark" ? "gray solid 1px" : "black solid 1px"}
                  backdropFilter="blur(12px)"
                />
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme={colorMode === "dark" ? "yellow" : "telegram"}
                isLoading={isLoading}
                backdropFilter="blur(12px)"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>



    </Section>
  )
})

export default ContactMe