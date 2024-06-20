import React from 'react';
import { Container, Navbar, Nav, Button, Card, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
      
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">CarRental</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      
      <Container fluid style={{ padding: '2rem', backgroundColor: '#eee', textAlign: 'center' }}>
        <h1>Welcome to CarRental</h1>
        <p>Find your perfect car rental today.</p>
        <Button variant="primary">Browse Cars</Button>
      </Container>

  
      <Container style={{ padding: '2rem' }}>
        <h2>Featured Cars</h2>
          <Card>
            <Card.Img variant="top" src="car_image_url" />
            <Card.Body>
              <Card.Title>Economy Car</Card.Title>
              <Card.Text>
                Perfect for city travel and short distances.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="car_image_url" />
            <Card.Body>
              <Card.Title>SUV</Card.Title>
              <Card.Text>
                Spacious and comfortable - ideal for long journeys.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="car_image_url" />
            <Card.Body>
              <Card.Title>Luxury Car</Card.Title>
              <Card.Text>
                Travel in style with our premium luxury cars.
              </Card.Text>
            </Card.Body>
          </Card>
      </Container>

      
      <Container fluid style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '1rem' }}>
        <Row>
          <Col>
            © 2024 CarRental. All rights reserved.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
