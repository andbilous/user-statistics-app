import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import'./brainstorming.scss';


const Brainstorming = () => {
    return (
      <section className='brainstorming pt-100 bg-image'>
      <Container>
          <Row className="row align-items-center justify-content-between py-5">
            <Col className="col-md-7 col-lg-6">
              <p className='brainstorming-header'>
              <b style={{fontWeight:bo}}>Brainstorming</b> for desired perfect Usability
              </p>
              <p className='brainstorming-subheader'>
              Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
              </p>
              </Col>
            <Col className="col-md-5 col-lg-5">
              <div className='mobile'></div>
            </Col>
          </Row>
      </Container>
      </section>
    )
};

export default Brainstorming;