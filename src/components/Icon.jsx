import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaNode } from "react-icons/fa6";
import { TbApiApp, TbBinaryTree, TbFileTypeSql } from 'react-icons/tb'
import { SiHtml5, SiMui, SiCss3, SiBootstrap, SiMongodb, SiOpenai, SiChakraui, SiStyledcomponents, SiExpo, SiFirebase, SiGraphql, SiJest, SiPostman, SiTailwindcss, SiJetbrains, SiGoogleanalytics, SiPython } from 'react-icons/si'
import { Badge, Stack } from 'react-bootstrap'
import { DiScrum } from 'react-icons/di'
import { MdDns } from 'react-icons/md'
import { FaAws, FaGitAlt, FaJava } from 'react-icons/fa'
import { IoIosRocket } from 'react-icons/io'
import { VscVscode } from 'react-icons/vsc'

const Icon = ({ name, variant, styles }) => {
  return (
    <Badge pill bg={variant || "info"} style={{ margin: "2px" }}>
      <Stack
        direction="horizontal"
        style={{
          padding: "2px",
          fontSize: "14px",
          ...styles
      }}>
        <span>{name}</span>
        <span>{logos[name]}</span>
      </Stack>
    </Badge>
  )
}

export default Icon

const logos = {
  "JavaScript": <RiJavascriptFill />,
  "Python": <SiPython />,
  "Java": <FaJava />,
  "OpenAI": <SiOpenai />,

  "React": <FaReact />,
  "React Native": <FaReact />,
  "Expo": <SiExpo />,
  "NodeJS": <FaNode />,

  "MongoDB": <SiMongodb />,
  "SQL": <TbFileTypeSql />,
  "Firebase": <SiFirebase />,
  "AWS": <FaAws />,
  "Google Analytics": <SiGoogleanalytics />,
  "DNS & Networks": <MdDns />,

  "APIs": <TbApiApp />,
  "GraphQL": <SiGraphql />,
  "Data Structures": <TbBinaryTree />,

  "HTML": <SiHtml5 />,
  "CSS": <SiCss3 />,
  "Material UI": <SiMui />,
  "ChakraUI": <SiChakraui />,
  "Styled Components": <SiStyledcomponents />,
  "Bootstrap": <SiBootstrap />,
  "Tailwind CSS": <SiTailwindcss />,


  "Git": <FaGitAlt />,
  "Postman": <SiPostman />,
  "Scrum": <DiScrum />,
  "Testing": <SiJest />,
  "Deployment": <IoIosRocket />,
  "VSCode": <VscVscode />,
  "JetBrains": <SiJetbrains />,
}

