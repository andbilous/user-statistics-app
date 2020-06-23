import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import'./brainstorming.scss';


const Brainstorming = () => {
    return (
      <section className='brainstorming pt-100 bg-image'>
      <Container>
          <Row className="row align-items-center justify-content-between py-5">
            <Col className="col-md-7 col-lg-6">
              Brainstorming for desired perfect Usability
              Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
              </Col>
            <Col className="col-md-5 col-lg-5">
              
            </Col>
          </Row>
      </Container>
      </section>
    )
};

export default Brainstorming;