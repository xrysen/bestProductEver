import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeightHanging, faPalette, faCog, faFileContract } from "@fortawesome/free-solid-svg-icons"
import "./Perks.css";

const Perks = () => {
  return (
    <Container id = "perks" fluid className="perks-container">
      <Row>
        <Col style = {{ marginTop: "200px"}}>
          <FontAwesomeIcon icon = {faWeightHanging} size="5x"/>
          <h5>Light Weight</h5>
          <p>Take it wherever you need to go</p>
        </Col>
        <Col style = {{ marginTop: "200px"}}>
          <FontAwesomeIcon icon = {faPalette} size = "5x" />
          <h5>Colour Choice</h5>
          <p>Comes in a variety of colours!</p>
        </Col>
        <Col style = {{ marginTop: "200px"}}>
          <FontAwesomeIcon icon = {faCog} size = "5x" />
          <h5>Adjustable</h5>
          <p>Choose how you want to use it!</p>
        </Col>
        <Col style = {{ marginTop: "200px"}}>
          <FontAwesomeIcon icon = {faFileContract} size = "5x" />
          <h5>100% Money Back</h5>
          <p>If you're not satisifed we'll refund you! Guarunteed!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Perks;
