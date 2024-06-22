import React from 'react';
import { Container, Card } from 'react-bootstrap';
import ImageOne from '../images/aboutPage/pic1.jpg'
import ImageTwo from '../images/aboutPage/pic2.jpg'
import ImageThree from '../images/aboutPage/pic3.jpg'
import Footer from '../components/footerComponent';
import NavBarComponent from '../components/navBarComponent';

const AboutPage = () => {
    return (
        <>
            <NavBarComponent />
            <Container fluid style={{ padding: '2rem', backgroundColor: '#eee', textAlign: 'center' }}>
                <h1>About Ready Rides</h1>
            </Container>

            <Container style={{ padding: '2rem' }}>
                <img src={ImageTwo} alt="About Ready Rides" />
                <Card>
                    <Card.Body>
                        <Card.Title>Who We Are</Card.Title>
                        <Card.Text>
                            We are a family owned business and have been since our inception in 1972. Our founder built this business soley based on 3 things that we still value and uphold till this day.. Excellence, a great value, and making sure our customers leave with smiles on their faces!
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>What We Do</Card.Title>
                        <Card.Text>
                            Ready Rides is a car rental service that provides a wide range of vehicles to meet any and all of your needs. Whether you're going on a road trip, to a ball game or festival, or simply need a luxury car for a formal business meeting, Ready Rides has got you covered.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <img src={ImageThree} alt="About Ready Rides" />
                <img src={ImageOne} alt="About Ready Rides" />
                <Card>
                    <Card.Body>
                        <Card.Title>Who We Cater To</Card.Title>
                        <Card.Text>
                            Here at Ready Rides we have a 'creed'... No job is TOO small and no job is TOO big! Need a small compact vehicle to make a quick unplanned trip with pet or child... We got you covered. Need a large truck or van because your moving... We got you covered... Need a fleet of 5 or even 10 monster trucks to move dirt around... Again we have you COVERED!!! For best service and accomodations we highly recommend that you inquire with us at your earliest convenince about your needs so that we can make sure we have you COVERED for your larger jobs/projects.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Footer />
        </>
    );
}

export default AboutPage;
