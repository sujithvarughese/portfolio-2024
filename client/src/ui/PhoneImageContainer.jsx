import phone from "../assets/images/backgrounds/phone-angled.png"
import { Box, HStack, Image } from '@chakra-ui/react'
const PhoneImageContainer = ({ images }) => {
  return (
    <HStack>
      {images?.map((image, index) => <SinglePhoneContainer key={index} image={image}/>)}
    </HStack>

  )
}

const SinglePhoneContainer = ({ image }) => {
  return (
    <Box sx={{ perspective: "100em" }}>
      <Image src={phone} alt="phone"></Image>

      <Image
        src={image}
        alt="mobile-screenshot"
        height="95%"
        transform={{base: "rotateY(330deg) skewY(-1deg)", sm: "rotateY(330deg) skewY(0deg)", md: "rotateY(332deg) skewY(.5deg)"}}
        borderTopLeftRadius={{base: "11px", sm:"16px", lg: "26px"}}
        borderTopRightRadius={{base: "13px", sm:"20px", lg: "26px"}}
        borderBottomLeftRadius={{ base: "10px", sm:"20px", lg: "26px" }}
        borderBottomRightRadius={{ base: "6px", sm: "22px", lg: "26px" }}
        position="absolute"
        top={{ base: "5px", sm: "9px", md: "9px"}}
        left={{base: "-4px", sm: "-7px", md: "-8px"}}
      />
    </Box>




  )
}

export default PhoneImageContainer