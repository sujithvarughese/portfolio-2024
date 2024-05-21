import reactIcon from "../assets/icons/react-icon.svg"
import javascriptIcon from "../assets/icons/javascript-icon-white.svg"
import nodeIcon from "../assets/icons/node-icon.svg"
import mongoIcon from "../assets/icons/mongodb-icon.svg"
import sqlIcon from "../assets/icons/sql-icon.svg"
import firebaseIcon from "../assets/icons/mongodb-icon.svg"
import openaiIcon from "../assets/icons/openai-icon.svg"
import chakraIcon from "../assets/icons/chakraui-icon.svg"
import styledComponentsIcon from "../assets/icons/styled-components-icon.svg"
import expoIcon from "../assets/icons/expo-icon.svg"
import htmlIcon from "../assets/icons/html-icon.svg"
import cssIcon from "../assets/icons/css-icon.svg"
import bootstrapIcon from "../assets/icons/bootstrap-icon.svg"

const IconLogo = ({ name }) => <img src={logos[name]} alt="logo" color="white"/>

const logos = {
  "JavaScript" : javascriptIcon,
  "React": reactIcon,
  "React Native": reactIcon,
  "NodeJS": nodeIcon,
  "MongoDB": mongoIcon,
  "Firebase": firebaseIcon,
  "OpenAI": openaiIcon,
  "ChakraUI": chakraIcon,
  "Styled Components": styledComponentsIcon,
  "Expo": expoIcon,
  "HTML": htmlIcon,
  "CSS": cssIcon,
  "SQL": sqlIcon,
  "Bootstrap": bootstrapIcon
}

export default IconLogo