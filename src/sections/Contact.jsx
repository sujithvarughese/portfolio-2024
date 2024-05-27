import { Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <section style={{ minHeight: "initial"}}>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          letterSpacing: 1
      }}>
        <h2>Thank you for visiting.</h2>
        <h4>Feel free to contact me with any feedback or opportunities to work together.</h4>
      </Container>
    </section>
  )
}

export default Contact