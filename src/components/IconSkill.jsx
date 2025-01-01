import { Stack, SvgIcon } from '@mui/material'
import Text from './ui/Text.jsx'
import {RiJavascriptFill} from "react-icons/ri";
import {
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiExpo,
  SiFirebase,
  SiGoogleanalytics,
  SiGraphql,
  SiHtml5, SiJest, SiJetbrains,
  SiMongodb, SiMui,
  SiOpenai, SiPostman,
  SiPython, SiStyledcomponents, SiTailwindcss, SiGooglecloud
} from "react-icons/si";
import {FaAws, FaGitAlt, FaJava} from "react-icons/fa";
import {FaFacebookF, FaLinkedinIn, FaNode, FaReact} from "react-icons/fa6";
import {TbApiApp, TbBinaryTree, TbFileTypeSql} from "react-icons/tb";
import {MdDns} from "react-icons/md";
import {DiScrum} from "react-icons/di";
import {IoIosRocket} from "react-icons/io";
import {VscVscode} from "react-icons/vsc";

const IconSkill = ({ name }) => {
  return (
    <Stack alignItems="center" sx={{py: {xs: 2, sm: 3, md: 4, }, "&:hover": { color: "dodgerblue" } }}>
      <SvgIcon
        inheritViewBox
        fontSize="large"
      >{logos[name]}</SvgIcon>
      <Text sx={{ fontSize: 14, fontWeight: 700 }}>{name}</Text>
    </Stack>
  )
}

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
  "Amazon Web Services": <FaAws />,
  "Google Cloud": <SiGooglecloud />,
  "Google Analytics": <SiGoogleanalytics />,
  "Network Configuration": <MdDns />,
  "API Integration": <TbApiApp />,
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
  "App Deployment": <IoIosRocket />,
  "VSCode": <VscVscode />,
  "JetBrains": <SiJetbrains />,
  "Facebook": <FaFacebookF />,
  "LinkedIn": <FaLinkedinIn />
}



export default IconSkill