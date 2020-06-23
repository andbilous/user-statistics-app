import React from 'react';
import { Container, Row, Col} from 'reactstrap';


const PlainHeader = () => {
    return (
      <header className='header'>
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