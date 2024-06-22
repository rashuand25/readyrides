import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const SignUpModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Access the form data using event.target.elements
    const formData = {
      name: event.target.elements.formBasicName.value,
      phone: event.target.elements.formBasicPhone.value,
      email: event.target.elements.formBasicEmail.value,
      password: event.target.elements.formBasicPassword.value,
    };

    // Now you can perform any necessary actions with the form data
    console.log('Form data:', formData);
    // You can send the data to your server, update state, etc.
  };

  return (
    <>
      <p onClick={handleShow} style={{ cursor: 'pointer', color: 'silver' }}>
        Sign Up
      </p>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignUpModal;
