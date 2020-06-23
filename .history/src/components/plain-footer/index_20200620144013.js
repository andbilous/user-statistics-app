import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './'

const PlainFooter = () => {
    return (
      <footer className='footer'>
        <Container>
          <Row>
            <Col md='12'>
              footer
            </Col>
          </Row>
        </Container>
      </footer>
    )
};

export default PlainFooter;