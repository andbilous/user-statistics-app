import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './plain-footer.scss';

const PlainFooter = () => {
    return (
      <footer className='plain-footer'>
        <Container>
          <Row className='justify-content-between'>
          <Col className='col-md' lg='4'>
            <span>AppCo</span>
          </Col>
          <Col className='col-md' lg='4'>
          <span>AppCo</span>
            </Col>
            <Col className='col-md' lg='4'>
            <span>AppCo</span>
            </Col>
          </Row>
        </Container>
      </footer>
    )
};

export default PlainFooter;