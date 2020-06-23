import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './plain-footer.scss';

const PlainFooter = () => {
    return (
      <footer className='plain-footer d-none'>
        <Container>
          <Row className='justify-content-between'>
          <Col className='col-md' lg='4'>
            <span className='footer-title'>AppCo</span>
          </Col>
          <Col className='col-md text-center' lg='4'>
          <span>All rights reserved by ThemeTags</span>
            </Col>
            <Col className='col-md text-right' lg='4'>
            <span>Copyrights © 2019.</span>
            </Col>
          </Row>
        </Container>
      </footer>
    )
};

export default PlainFooter;