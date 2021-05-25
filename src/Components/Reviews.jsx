import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import "./Reviews.css";
import pic2 from "../Assets/pic2.png";

const Reviews = () => {
  return (
    <Container id = "reviews" fluid className="reviews-container">
      <Row>
        <Col>
        <img src = {pic2} alt = "Thinking" style = {{ width: "100%"}} />
        </Col>
        <Col>
          <CardGroup className="review-cards">
            <Card>
              <Card.Header>*****</Card.Header>
              <blockquote className="blockquote mb-0">
                <p>"This seriously changed my life."</p>
                <footer className="blockquote-footer">
                  Jake from New York
                </footer>
              </blockquote>
            </Card>

            <Card>
              <Card.Header>*****</Card.Header>
              <blockquote className="blockquote mb-0">
                <p>"How did I ever live without this?!!"</p>
                <footer className="blockquote-footer">
                  Emily from Vancouver
                </footer>
              </blockquote>
            </Card>

            <Card>
              <Card.Header>*****</Card.Header>
              <blockquote className="blockquote mb-0">
                <p>
                  "Before the Best Product Ever™, I was so lost. Now, my path
                  has never been clearer
                </p>
                <footer className="blockquote-footer">Zack from Toronto</footer>
              </blockquote>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
