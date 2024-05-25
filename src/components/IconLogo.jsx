import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaNode } from "react-icons/fa6";
import { TbFileTypeSql } from "react-icons/tb";
import { SiHtml5, SiCss3, SiBootstrap, SiMongodb, SiOpenai, SiChakraui, SiStyledcomponents, SiExpo, SiFirebase } from "react-icons/si"
import { Badge, Stack } from 'react-bootstrap'


const IconLogo = ({ name }) => {
  return (
    <Badge pill bg="info">
      <Stack direction="horizontal" style={{ gap: "3px", fontSize: "14px"}}>
        <p>{name}</p>
        {logos[name]}
      </Stack>

    </Badge>
  )
}

const logos = {
  "JavaScript": <RiJavascriptFill />,
  "React": <FaReact />,
  "React Native": <FaReact />,
  "NodeJS": <FaNode />,
  "MongoDB": <SiMongodb />,
  "Firebase": <SiFirebase />,
  "OpenAI": <SiOpenai />,
  "ChakraUI": <SiChakraui />,
  "Styled Components": <SiStyledcomponents />,
  "Expo": <SiExpo />,
  "HTML": <SiHtml5 />,
  "CSS": <SiCss3 />,
  "SQL": <TbFileTypeSql />,
  "Bootstrap": <SiBootstrap />
}

export default IconLogo