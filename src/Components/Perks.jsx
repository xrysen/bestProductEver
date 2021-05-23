import { Col, Container, Row } from "react-bootstrap";
import "./Perks.css";

const Perks = () => {
  return (
    <Container fluid className="perks-container">
      <Row>
        <Col style = {{marginTop: "20px"}}>
          <h1>Introducing the Best Product Ever™</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <img
          style = {{ borderRadius: "10px"}}
          src="https://images.unsplash.com/photo-1495837174058-628aafc7d610?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
          alt="Party"
        />
        </Col>
      </Row>
    </Container>
  );
};

export default Perks;
