import phone from "../assets/images/backgrounds/phone-angled.png"
import { Container, Stack, Image } from 'react-bootstrap'
import classes from "../styles/PhoneImageContainer.module.css"
const PhoneImageContainer = ({ images }) => {
  return (
    <Stack direction="horizontal">
      {images?.map((image, index) => <SinglePhoneContainer key={index} image={image}/>)}
    </Stack>

  )
}

const SinglePhoneContainer = ({ image }) => {
  return (
    <Container className={classes.container}>
      <Image src={phone} alt="phone" />
      <Image src={image} className={classes.image} alt="mobile-screenshot" />
    </Container>
  )
}

export default PhoneImageContainer