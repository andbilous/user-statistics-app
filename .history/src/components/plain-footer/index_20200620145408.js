import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './plain-footer.scss';

const PlainFooter = () => {
    return (
      <footer className='plain-footer'>
        <Container>
          <Row>
          <Col className='col-md' lg='4'>
            1
          </Col>
          <Col className='col-md' lg='4'>
            
            </Col>
            <Col className='col-md' lg='4'>
            
            </Col>
          </Row>
        </Container>
      </footer>
    )
};

export default PlainFooter;