import React from 'react';
import { Container, Navbar, Nav, Button, Card, Row, Col, CardTitle } from 'react-bootstrap';
import SignUpModal from '../components/Modals/SignUpModal';
import SignInModal from '../components/Modals/SignInModal';
import HomePageSedan from '../images/black_altima.jpg'
import HomePageTruck from '../images/black_tahoe.jpg'
import HomePageEconomy from '../images/black_chevy_cruze.jpg'
import HomePageLuxury from '../images/black_infinitiQX80.jpg'
import Footer from '../components/footerComponent';

const HomePage = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand to="/">Ready Rides</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/products">Products</Nav.Link>
            <Nav.Link to='/reservations'>Reservations</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
            <Nav.Link to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="ml-auto">
          <SignInModal />
          <p>Or</p>
          <SignUpModal />
        </Nav>
      </Navbar>

      <div>
        <Container fluid style={{ padding: '2rem', backgroundColor: '#eee', textAlign: 'center' }}>
          <h1>Welcome to Ready Rides</h1>
          <p>Your ride is ready!</p>
          <Button variant="primary">Browse Cars</Button>
        </Container>

        <h2 style={{ textAlign: 'center' }}>Featured Vehicles</h2>
        <Container style={{ padding: '2rem' }}>
          <Card>
            <Card.Body>
              <Card.Title >Economy Car</Card.Title>
              <Card.Text>
                Perfect for city travel and those shorter distance trips.
              </Card.Text>
              <Card.Img variant="top" src={HomePageEconomy} alt='Economy Car' />
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Truck/SUV</Card.Title>
              <Card.Text>
                Spacious and comfortable. Ideal for long trips.
              </Card.Text>
              <br></br>
              <br></br>
              <Card.Img variant="top" src={HomePageTruck} alt='Truck/SUV' />
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Luxury Car</Card.Title>
              <Card.Text>
                Travel in style with one of our premium luxury vehicles.
              </Card.Text>
              <br></br>
              <br></br>
              <Card.Img variant="top" src={HomePageLuxury} />
            </Card.Body>
          </Card >
          <Card>
            <Card.Body>
              <Card.Title>Sedan</Card.Title>
              <Card.Text>
                Perfect for smaller families or couples who don't need all the extra space.
              </Card.Text>
              <Card.Img variant='top' src={HomePageSedan} />
            </Card.Body>
          </Card>
        </Container>

        <Footer />
        
      </div>
    </>
  );
};

export default HomePage;
