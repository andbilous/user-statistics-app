import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import'./footer.scss';


const Footer = () => {
    return (
      <footer>
        <Container>
          <Row className='justify-content-center'>
            <Col md='6'></Col>
          </Row>
          <Row></Row>
        </Container>
      </footer>
    )
};

export default Footer;