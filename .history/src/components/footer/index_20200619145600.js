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
          <Row className='justify-content-between'>
            <Col className='col-md' lg='4'>
            AppCo
            </Col>
            <Col className='col-md' lg='4'>
              242
              </Col>
              <Col className='col-md' lg='4'>
              2424
              </Col>
          </Row>
        </Container>
      </footer>
    )
};

export default Footer;