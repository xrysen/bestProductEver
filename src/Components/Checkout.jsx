import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkoutform from "./CheckoutForm";
import { Container } from "react-bootstrap";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  return (
    <Container>
      <Elements stripe={stripePromise}>
        <Checkoutform />
      </Elements>
    </Container>
  );
};

export default Checkout;
