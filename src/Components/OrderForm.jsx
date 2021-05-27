import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useContext } from "react";
import { ShippingContext } from "../Contexts/ShippingContext"


const packages = [
  {
    id: 1,
    name: "Standard",
    price: 59.99,
  },
  {
    id: 2,
    name: "Deluxe",
    price: 99.99,
  },
  {
    id: 3,
    name: "Ultra-Deluxe",
    price: 159.99,
  },
];

const OrderForm = (props) => {
  const {formValues, setFormValues, radioValue, setRadioValue} = useContext(ShippingContext);

  const handleChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(packages[radioValue]);
    console.log(formValues);
    if (!radioValue) {
      alert("Please pick a package!")
    } else {

      props.viewChange();
    }
  }

  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <h1>Choose Your Package</h1>
      </Row>
      <Row style = {{ marginBottom: "50px"}}>
        {packages.map((item) => {
          return (
            <Col key = {item.id}>
              <h3>{item.name}</h3>
              <h1>${item.price}</h1>
              <input
                type="radio"
                name="package"
                value={item.id}
                onChange={()=> setRadioValue(item)}
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
                required
                type="text"
                placeholder="First Name"
                value={formValues.firstName}
                name="firstName"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formLastName">
              <Form.Control
                required
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
                required
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
                required
                name="city"
                type="text"
                placeholder="City"
                value={formValues.city}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                type="text"
                name="state"
                placeholder="State/Province"
                value={formValues.state}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                type="text"
                name="postalCode"
                placeholder="Zip/Postal Code"
                value={formValues.postalCode}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
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

export default OrderForm;
