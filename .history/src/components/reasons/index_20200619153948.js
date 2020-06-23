import React from 'react';
import './reasons.scss';
import { Container, Row, Col,Card } from 'reactstrap';


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
            <Col className='col-lg-4 col-md'>
              <Card className='text-center card-block'>
                <div className='pt-4'>
                  <h5>Clean design.</h5>
                </div>
                <div className='reasons-img mt-4'>
                <img src='../../img/1.png'/>
                </div>
                Increase sales by showing true dynamics of your website.
              </Card>
            </Col>
            <Col className='col-lg-4 col-md'>
            <Card className='text-center card-block'>
                Secure data.
                Build your online store’s trust using Social Proof & Urgency.
              </Card>
            </Col>
            <Col className='col-lg-4 col-md'>
            <Card className='text-center card-block'>
                Retina ready.
                Realize importance of social proof in customer’s purchase decision.
              </Card>
            </Col>
          </Row>
          
      </Container>
      </section>
    )
};

export default Reasons;