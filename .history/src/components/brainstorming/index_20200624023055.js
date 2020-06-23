import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import'./brainstorming.scss';
import { useHistory } from 'react-router-dom';


const Brainstorming = () => {
  const history = useHistory();
    return (
      <section className='brainstorming pt-100 bg-image'>
      <Container>
          <Row className="align-items-center justify-content-between py-5">
            <Col className="col-md-7 col-lg-6">
              <p className='brainstorming-header'>
              <b style={{fontWeight:'bold'}}>Brainstorming</b> for desired perfect Usability
              </p>
              <p className='brainstorming-subheader lead'>
              Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
              </p>
              <butt href='#' onClick={()=>{history.push('./users')}} className='brainstorming-btn'>Views stats</a>
              </Col>
            <Col className="col-md-5 col-lg-5">
            <img alt='mobile' className='img-fluid' src='/img/mobile.png'/>
            </Col>
          </Row>
      </Container>
      </section>
    )
};

export default Brainstorming;