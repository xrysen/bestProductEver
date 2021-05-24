import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <Container style = {{ marginTop: "20px"}}>
      <Row>
        <Col>
        <p>© 2021 BestCo</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer;