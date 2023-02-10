import { React, useRef } from "react";
import { Container, Button, Form, Card } from "react-bootstrap";

const ContactUs = (props) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    props.onAddDetails(details);
  }

  return (
    <Container className="justify-content-center d-flex h-100">
      <Card
        className="shadow-lg mt-5 text-center"
        style={{ width: "40rem", margin: "auto", top: "50%" }}
      >
        <Card.Header
          className="p-3 fw-bold"
          style={{ backgroundColor: "#0dcaf0", color: "white" }}
        >
          Please Enter Your Details
        </Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Control  type="text" placeholder="Name" ref={nameRef} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="email-Id"
                ref={emailRef}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder=" Phone Number"
                ref={phoneRef}
              />
            </Form.Group>
            <Form.Group>
              <Button style={{ color: "white" }} variant="info" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ContactUs;
