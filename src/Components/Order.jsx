import OrderForm from "./OrderForm";
import { useState } from "react";
import { ShippingContext } from "../Contexts/ShippingContext";
import { Container } from "react-bootstrap";
import Checkout from "./Checkout";


const Order = () => {
  const [view, setView] = useState("form");
  const [radioValue, setRadioValue] = useState(0);
  const [formValues, setFormValues] = useState( {
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    postalCode: ""
  });

  const changeView = (newView) => {
    setView(newView);
  }

  return (
    <Container>
      <ShippingContext.Provider value = {{formValues, setFormValues, radioValue, setRadioValue}}>
      {view === "form" && (
        <OrderForm viewChange = {()=> changeView("checkout")} />
      )}
      {view === "checkout" && (
        <Checkout price = {radioValue.price} product = {radioValue.name} />
      )}
      {view === "summary" && (
        <h1>Thanks {formValues.firstName}!</h1>
      )}
      </ShippingContext.Provider>
    </Container>
  )
}

export default Order;