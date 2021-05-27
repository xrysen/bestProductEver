import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkoutform from "./CheckoutForm";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Checkout.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Checkout = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Elements stripe={stripePromise}>
            <Checkoutform />
          </Elements>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <div className = "summary">
                <h3>Product</h3>
                <h3>Price</h3>
              </div>
              <div className = "summary">
                <p>{props.product}</p>
                <p>${props.price}</p>
              </div>
              <div className = "summary">
                <p>Shipping</p>
                <p><strike>$12.99</strike><strong>FREE</strong></p>
              </div>
              <hr />
              <div className = "summary">
                <p>Total:</p>
                <p><strong>${props.price}</strong></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
