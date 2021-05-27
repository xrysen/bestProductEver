import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";


const packages = [
  {
    id: 0,
    name: "Standard",
    price: 59.99,
  },
  {
    id: 1,
    name: "Deluxe",
    price: 99.99,
  },
  {
    id: 2,
    name: "Ultra-Deluxe",
    price: 159.99,
  },
];

const Summary = () => {
  const [radioValue, setRadioValue] = useState(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });

  const handleRadio = (e) => {
    setRadioValue(e.target.value);
    console.log(radioValue);
  };

  const handleChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <h1>Choose Your Package</h1>
      </Row>
      <Row>
        {packages.map((item) => {
          return (
            <Col>
              <h3>{item.name}</h3>
              <h1>${item.price}</h1>
              <input
                type="radio"
                name="package"
                value={item.id}
                onChange={(e) => handleRadio(e)}
              />
            </Col>
          );
        })}
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Form onSubmit = {handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formName">
              <Form.Control
                type="text"
                placeholder="First Name"
                value={formValues.firstName}
                name="firstName"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formLastName">
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formValues.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formAddress">
              <Form.Control
                type="text"
                name="address1"
                placeholder="Street Number/Name"
                value={formValues.address1}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formAddress2">
              <Form.Control
                type="text"
                name="address2"
                placeholder="Apt/Suite/Unit #"
                value={formValues.address2}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formCity">
              <Form.Control
                name="city"
                type="text"
                placeholder="City"
                value={formValues.city}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="state"
                placeholder="State/Province"
                value={formValues.state}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="postalCode"
                placeholder="Zip/Postal Code"
                value={formValues.postalCode}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Country"
                name="country"
                value={formValues.country}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Button type = "submit">Submit</Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Summary;
