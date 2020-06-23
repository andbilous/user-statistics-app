import React from 'react';
import './reasons.scss';
import { Container, Row, Col } from 'reactstrap';


const Reasons = () => {
    return (
      <section className='reasons'>
      <Container>
          <Row className="justify-content-center">
          <Col className="col-lg-7 col-md-8">
            <div className='section-heading text-center mb-5'>
              <h2>Why small business owners love AppCo?</h2>
              <p className='lead'>
              Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
              </p>
            </div>
          </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className='col-lg-4 col-md'>1</Col>
            <Col className='col-lg-4 col-md'>2</Col>
            <Col className='col-lg-4 col-md'></Col>
          </Row>
          
      </Container>
      </section>
    )
};

export default Reasons;