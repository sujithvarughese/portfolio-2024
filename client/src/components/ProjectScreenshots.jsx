import PhoneImageContainer from '../ui/PhoneImageContainer.jsx'
import DesktopMobileImageContainer from '../ui/DesktopMobileImageContainer.jsx'

const ProjectScreenshots = ({ title, images, desktop, mobile }) => {


  return title === "Simpler Fitness" ? <PhoneImageContainer images={images} /> : <DesktopMobileImageContainer desktop={desktop} mobile={mobile}/>
}

export default ProjectScreenshots