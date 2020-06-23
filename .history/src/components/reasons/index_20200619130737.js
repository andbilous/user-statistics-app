import React from 'react';
import './header.scss';
import { Container, Row, Col } from 'reactstrap';


const Reasons = () => {
    return (
      <section className='reasons'>
      <Container>
          <Row className="justify-content-center">
          <Col className="col-lg-7 col-md-8">
            <div className='section-heading text-center mb-5'>
              <h2>Why small business owners love AppCo?</h2>
            </div>
          </Col>
          </Row>
          
      </Container>
      </section>
    )
};

export default Reasons;