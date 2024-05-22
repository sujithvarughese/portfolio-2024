import mobileScreen from "../assets/images/backgrounds/smartphone.png";
import desktopScreen from "../assets/images/backgrounds/monitor.png";
import { Container, Image } from 'react-bootstrap'
import classes from "../styles/DesktopMobileImageContainer.module.css"
const DesktopMobileImageContainer = ({ desktop, mobile }) => {

  return (
      <Container className={classes.container}>
        <Container>
          <Image src={desktopScreen} className={classes.desktopScreen} />
        </Container>

        <Container>
          <Image src={mobileScreen} className={classes.mobileScreen} />
        </Container>

        <Image className={classes.desktop} src={desktop} />
        <Image className={classes.mobile} src={mobile} />
      </Container>


  )
}

export default DesktopMobileImageContainer