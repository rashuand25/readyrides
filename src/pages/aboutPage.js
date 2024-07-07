import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import ImageOne from '../images/aboutPage/pic1.jpg';
import ImageTwo from '../images/aboutPage/pic2.jpg';
import ImageThree from '../images/aboutPage/pic3.jpg';
import './css/aboutCss.css'

const AboutPage = () => {
  const styles = {
    images: {
      height: '100%',
      width: '100%',
      paddingBottom: '2rem'
    },
    cards: {
      height: '93.7%',
      backgroundColor: 'aqua'
    },
    cardsBody: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }
  }
  return (
    <>
      <Container fluid style={{ padding: '2rem', backgroundColor: '#FF5F1F', textAlign: 'center' }}>
        <h1>About Ready Rides</h1>
      </Container>

      <Container style={{ padding: '2rem' }}>
        <Row>
          <Col md={6}>
            <img src={ImageOne} alt="About Ready Rides" style={styles.images} />
          </Col>
          <Col md={6}>
            <Card style={styles.cards}>
              <Card.Body style={styles.cardsBody}>
                <Card.Title>Who We Are</Card.Title>
                <Card.Text style={styles.cardsText} className='cardsText'>
                  We are a family-owned business and have been since our inception in 1972. Our founder built this business solely based on three things that we still value and uphold to this day: Excellence, great value, and making sure our customers leave with smiles on their faces!
                </Card.Text >
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <img src={ImageTwo} alt="About Ready Rides" style={styles.images} />
          </Col>
          <Col md={6}>
            <Card style={styles.cards}>
              <Card.Body style={styles.cardsBody}>
                <Card.Title>What We Do</Card.Title>
                <Card.Text style={styles.cardsText} className='cardsText'>
                  Ready Rides is a car rental service that provides a wide range of vehicles to meet any and all of your needs. Whether you're going on a road trip, to a ball game or festival, or simply need a luxury car for a formal business meeting, Ready Rides has got you covered.
                </Card.Text >
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row> {/* Third row */}
          <Col md={6}>
            <img src={ImageThree} alt="About Ready Rides" style={styles.images} />
          </Col>
          <Col md={6}>
            <Card style={styles.cards}>
              <Card.Body style={styles.cardsBody}>
                <Card.Title>Who We Cater To</Card.Title>
                <Card.Text style={styles.cardsText} className='cardsText'>
                  Here at Ready Rides, we have a 'creed'... No job is TOO small and no job is TOO big! Whether you need a small compact vehicle for a quick unplanned trip or a fleet of monster trucks to move dirt around, we've got you covered. Inquire with us about your needs, and we'll make sure you're COVERED!
                </Card.Text >
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutPage;
