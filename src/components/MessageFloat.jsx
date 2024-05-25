import { BiMessageRoundedDetail } from "react-icons/bi";
import { Container } from 'react-bootstrap'
const emailAddress = "sujith.varug@gmail.com"

const MessageFloat = () => {

  return (
    <a
      href={`mailto:${emailAddress}`}

      style={styles}
    >
      <BiMessageRoundedDetail />
    </a>
  )
}

const styles = {
  position: "fixed",
  bottom: "5%",
  right: "10%",
  zIndex: 999,
  background: "rgba(217, 217, 217, 0.1)",
  borderRadius: "50%",
  fontSize: "36px",
  fontWeight: "700",
  color: "#fff",
  border: "1px solid #fff",
  padding: "10px",
  backdropFilter: "blur(4px)",
  transition: "0.3s ease-in-out",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  aspectRatio: "1/1"
}

export default MessageFloat