import { Col, Container, Row, Button } from "react-bootstrap";
import "./Hero.css";
import pic1 from "../Assets/pic1.png";

const Hero = () => {
  return (
    <Container fluid className = "hero-container">
      <Row>
        <Col style = {{ marginTop: "auto", marginBottom: "auto"}}>
        <h1>Experience <strong>Life</strong></h1>
        <h3>Like <strong>never</strong> before</h3>
        <Button style = {{ marginTop: "20px" }} varient="primary">Find Out How</Button>
        </Col>
        <Col>
          <img src = {pic1} alt = "Happy Girl" />
        </Col>
      </Row>
    </Container>
  )
}

export default Hero;