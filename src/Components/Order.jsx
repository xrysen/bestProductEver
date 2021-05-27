import OrderForm from "./OrderForm";
import { useState } from "react";
import { ShippingContext } from "../Contexts/ShippingContext";
import { Container } from "react-bootstrap";


const Order = () => {
  const [view, setView] = useState("form");
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
      <ShippingContext.Provider value = {{formValues, setFormValues}}>
      {view === "form" && (
        <OrderForm viewChange = {()=> changeView("summary")} />
      )}
      {view === "summary" && (
        <h1>Thanks {formValues.firstName}!</h1>
      )}
      </ShippingContext.Provider>
    </Container>
  )
}

export default Order;