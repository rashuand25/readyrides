import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send the form data to a server
    alert('Thank you for your message!');
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', height: '100vh' }}>
      <div style={{ position: 'absolute', left: 0, padding: '2rem', backgroundColor: '#f7f7f7', width: '20%' }}>
        <h3>Ready Rides</h3>
        <p><strong>Address:</strong> 532 I'm Here Now St, Business City, MS 12345</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> contact@ReadyRides.com</p>
        {/* Add more company details here */}
      </div>
      <div style={{ width: '40%', textAlign: 'center' }}>
        <h2>Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default ContactPage;
