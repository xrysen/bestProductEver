import "./Announcement.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Announcement = () => {
  return (
    <Container fluid className = "announcement-container">
      <Row>
        <Col>
        Free Shipping on orders over $50!
        </Col>
        <Col>
          Customer Service: 555-555-5555
        </Col>
      </Row>
    </Container>
  )
}

export default Announcement;