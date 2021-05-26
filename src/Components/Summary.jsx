import { Container, Row, Col, Form } from "react-bootstrap";
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
    postalCode: ""
  })

  const handleRadio = (e) => {
    setRadioValue(e.target.value);
    console.log(radioValue);
  };

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
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formName">
              <Form.Control type="text" placeholder="First Name" value={formValues.firstName} />
            </Form.Group>

            <Form.Group as={Col} controlId="formLastName">
              <Form.Control type="text" placeholder="Last Name" value={formValues.lastName}/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formAddress">
              <Form.Control type="text" placeholder="Street Number/Name" value={formValues.address1}/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formAddress2">
              <Form.Control type="text" placeholder="Apt/Suite/Unit #" value={formValues.address2}/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formCity">
              <Form.Control type = "text" placeholder="City" value={formValues.city}/>
            </Form.Group>
            <Form.Group>
              <Form.Control type = "text" placeholder="State/Province" value={formValues.state}/>
            </Form.Group>
            <Form.Group>
              <Form.Control type = 'text' placeholder = "Zip/Postal Code" value={formValues.postalCode}/>
            </Form.Group>
            <Form.Group>
              <Form.Control type = "text" placeholder = "Country" value={formValues.country} />
            </Form.Group>
          </Form.Row>
        </Form>
      </Row>
    </Container>
  );
};

export default Summary;
