import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';


const PlainHeader = () => {
    return (
      <header className='footer'>
        <Container>
          <Row>
            <Col md='12'>
              Header
            </Col>
          </Row>
        </Container>
      </header>
    )
};

export default PlainHeader;