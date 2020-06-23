import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import'./footer.scss';


const Footer = () => {
    return (
      <footer>
        <Container>
          <Row className='justify-content-center'>
            <Col md='6'>
              <div>
                Enter your email
                <Button>Subscribe</Button>
              </div>
            </Col>
          </Row>
          <Row className='justify-content-center'></Row>
        </Container>
      </footer>
    )
};

export default Footer;