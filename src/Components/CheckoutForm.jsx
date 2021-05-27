import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Form, Button } from "react-bootstrap";
import "./Checkoutform.css";
import { useState } from "react";

const CARD_OPTIONS = {
  iconStyle: "solid",
};


const CheckoutForm = (props) => {
  const [view, setView] = useState("summary");
  const [confirmationNumber, setConfirmationNumber] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  
  const generateConfirmationNumber = () => {
    setConfirmationNumber(Math.random().toString(36).slice(2));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    generateConfirmationNumber();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[Error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setView("thanks");
    }

  };

  return (
    <>
      {view === "summary" && (
        <Form
          className="checkout-form"
          onSubmit={handleSubmit}
          style={{ minWidth: "300px" }}
        >
          <h3>Credit Card Information</h3>
          <CardElement options={CARD_OPTIONS} />
          <Button type="submit" style={{marginTop: "30px"}} disabled={!stripe}>
            Pay Now
          </Button>
        </Form>
      )}
      {view === "thanks" && (
        <div>
          <h2>Order Confirmation: #{confirmationNumber}</h2>
          <h3>Thank you for order!</h3>
          <p>No money has been charged, this was only a test.</p>
          <p>
            Shipping to: <br />{props.user.firstName} {props.user.lastName} 
            <br />{props.user.address1}, {props.user.address2 ? props.user.address2 : ""} {props.user.city}, {props.user.country}</p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
