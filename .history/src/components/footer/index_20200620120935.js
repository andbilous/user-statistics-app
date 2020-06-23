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
            <span></span>
            </Col>
            <Col className='col-md' lg='4'>
            All rights reserved by ThemeTags
              </Col>
              <Col className='col-md' lg='4'>
              Copyrights © 2019. 
              </Col>
          </Row>
        </Container>
      </footer>
    )
};

export default Footer;