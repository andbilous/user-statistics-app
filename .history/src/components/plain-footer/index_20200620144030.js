import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './plain-footer.scss';

const PlainFooter = () => {
    return (
      <footer className='plain-footer'>
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