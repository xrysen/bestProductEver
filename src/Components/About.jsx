import { Row, Container, Col, Button } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <Container fluid className="about-container">
        <Row>
          <Col>
            <img
              width="800"
              src="https://images.unsplash.com/photo-1421986527537-888d998adb74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Fireworks"
            />
          </Col>
          <Col style={{ marginTop: "auto", marginBottom: "auto" }}>
            <h1>Finally</h1>
            <h3>
              A product that <strong>delivers</strong>
            </h3>
            <h3>
              On more than just a <strong>promise</strong>
            </h3>
            <Button style = {{ marginTop: "20px"}} variant = "primary">See Why</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
