import { Button, Col, Container, Row } from "react-bootstrap";
import "./Pricing.css";

const Pricing = () => {
  return (
    <Container fluid className = "pricing-container">
      <Row>
        <Col style = {{ marginTop: "100px"}}>
        <h2 style = {{ color: "#C5EBC3"}}>Standard</h2>
        <h1 style = {{ color: "white"}}>$59.99</h1>
        <ul style = {{ color: "#C5EBC3"}}>
          <li>Cancel Anytime</li>
          <li>3 Year Commitment</li>
          <li>Life Changes</li>
          <li>Reconnect with Estranged Family</li>
        </ul>
        </Col>
        <Col style = {{ marginTop: "100px"}}>
        <h2 style = {{ color: "#C5EBC3"}}>Deluxe</h2>
        <h1 style = {{ color: "white"}}>$99.99</h1>
        <ul style = {{ color: "#C5EBC3"}}>
          <li>Become President of a Nation</li>
          <li>Solve World Hunger</li>
          <li>All the same things that come with Standard</li>
        </ul>
        </Col>
        <Col style = {{ marginTop: "100px"}}>
        <h2 style = {{ color: "#C5EBC3"}}>Ultra-Deluxe</h2>
        <h1 style = {{ color: "white" }}>$159.99</h1>
        <ul style = {{ color: "#C5EBC3"}}>
          <li>
            Everything from Deluxe and Standard
          </li>
          <li>Discover Life on Mars</li>
          <li>Terraform Mars</li>
          <li>Fix Global Warming</li>
        </ul>
        </Col>
      </Row>
      <Row style = {{ justifyContent: "center"}}>
        <Button>Buy Now!</Button>
      </Row>
    </Container>
  )
}

export default Pricing;