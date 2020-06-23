import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import'./footer.scss';


const Footer = () => {
    return (
      <footer className='footer'>
        <Container>
          <Row className='justify-content-center'>
            <Col md='6'>
              <div className='subscribe-box d-flex align-items-center justify-content-center'>
                <input className='form-' placeholder='Enter your email' type='text' id='email'/>
                <input type='submit' id='submit' value='Subscribe'/>
              </div>
            </Col>
          </Row>
          <Row className='justify-content-between'>
            <Col className='col-md' lg='4'>
            <span className='footer-logo'>AppCo</span>
            </Col>
            <Col className='col-md' lg='4'>
            <span>All rights reserved by ThemeTags</span>
              </Col>
              <Col className='col-md' lg='4'>
            <span>Copyrights © 2019. </span>
              </Col>
          </Row>
        </Container>
      </footer>
    )
};

export default Footer;