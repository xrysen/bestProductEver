import { CardElement, useStripe, useElements, CardNumberElement } from "@stripe/react-stripe-js";
import { Form } from "react-bootstrap";
import "./Checkoutform.css";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if(!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    });

    if (error) {
      console.log('[Error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  }

  return (
    <Form className = "checkout-form" onSubmit = {handleSubmit}>
      <CardElement />
      <button type = "submit" disabled = {!stripe}>
        Pay Now
      </button>
    </Form>
  )
}

export default CheckoutForm;