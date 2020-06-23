import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import'./footer.scss';


const Footer = () => {
    return (
      <footer className='footer'>
        <Container>
          <Row className='justify-content-center'>
            <Col md='6'>
              <div>
                Enter your email
                <Button>Subscribe</Button>
              </div>
            </Col>
          </Row>
          <Row className='justify-content-between'>
            <Col className='col-md' lg='4'>
            <span>AppCo</span>
            </Col>
            <Col className='col-md' lg='4'>
            <span>All rights reserved by ThemeTags</span>
              </Col>
              <Col className='col-md' lg='4'>
            <spa  Copyrights © 2019. 
              </Col>
          </Row>
        </Container>
      </footer>
    )
};

export default Footer;