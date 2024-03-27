import desktopScreen from "../assets/images/backgrounds/monitor.png";
import { Image, SimpleGrid } from '@chakra-ui/react'

const DesktopScreenshot = ({ desktop }) => {
  console.log(desktop)
  return (
    <SimpleGrid>
      <Image src={desktopScreen} alt="desktop-bg" />
      <Image src={desktop} alt="desktop-screenshot" />
    </SimpleGrid>
  )
}

export default DesktopScreenshot