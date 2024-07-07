import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import HomePageSedan from '../images/blue_corolla.jpg';
import HomePageTruck from '../images/white_tahoe.jpg';
import HomePageEconomy from '../images/red_impreza.png';
import HomePageLuxury from '../images/black_infinitiQX80.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Container fluid style={{ padding: '2rem', backgroundColor: 'silver', textAlign: 'center' }}>
        <h1>Welcome to Ready Rides</h1>
        <p>Your ride is ready!</p>
        <Link to="/vehicles">
        <Button style={{backgroundColor: 'orange', border: 'none'}} >Browse Cars</Button>
        </Link>
      </Container>

      <h2 style={{ textAlign: 'center', marginTop: '4rem' }}>Featured Vehicles</h2>
      <Container style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '4rem' }}>
        <Card className='cards'>
          <Card.Body>
            <Card.Title>Economy Car</Card.Title>
            <Card.Text>Perfect for city travel and those shorter distance trips.</Card.Text>
            <Card.Img variant="top" src={HomePageEconomy} alt="Economy Car" />
          </Card.Body>
        </Card>

        <Card className='cards'>
          <Card.Body>
            <Card.Title>Truck/SUV</Card.Title>
            <Card.Text>Spacious and comfortable. Ideal for long trips.</Card.Text>
            <Card.Img variant="top" src={HomePageTruck} alt="Truck/SUV" />
          </Card.Body>
        </Card>

        <Card className='cards'>
          <Card.Body>
            <Card.Title>Luxury Car</Card.Title>
            <Card.Text>Travel in style with one of our premium luxury vehicles.</Card.Text>
            <Card.Img variant="top" src={HomePageLuxury} alt="Luxury Car" />
          </Card.Body>
        </Card>

        <Card className='cards'>
          <Card.Body>
            <Card.Title>Sedan</Card.Title>
            <Card.Text>Perfect for smaller families or couples who don't need all the extra space.</Card.Text>
          </Card.Body>
          <Card.Img variant="top" src={HomePageSedan} alt="Sedan" />
        </Card>
      </Container>
    </>
  );
};

export default HomePage;
