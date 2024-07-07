import { Container, Row, Col} from 'react-bootstrap';

const Footer = (props) => {
    return (
        <Container fluid style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '1rem', ...props.style }}>
            <Row>
                <Col>
                    © 2024 ReadyRides. All rights reserved.
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
