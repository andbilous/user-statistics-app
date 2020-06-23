import React from 'react';
import './reasons.scss';
import { Container, Row, Col,Card,CardBody } from 'reactstrap';


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
                </div>
                <div className='reasons-img mt-4'>
                <div id='img-1'/>
                </div>
                <div className='py-4 border-0 reasons-header'>
                  <span>Clean design</span>
                </div>
                <CardBody>
                    <span className='cardbody-text'>
                    Increase sales by showing true dynamics of your website.
                    </span>
                </CardBody>
              
              </Card>
            </Col>
            <Col className='col-lg-4 col-md'>
              <Card className='text-center card-block'>
                <div className='pt-4'>
                </div>
                <div className='reasons-img mt-4'>
                <div id='img-2'/>
                </div>
                <div className='py-4 border-0 reasons-header'>
                  <span>Secure Data</span>
                </div>
                <CardBody>
                    <span className='cardbody-text'>
                    Build your online store’s trust using Social Proof & Urgency.
                    </span>
                </CardBody>
              
              </Card>
            </Col>
            <Col className='col-lg-4 col-md'>
              <Card className='text-center card-block'>
                <div className='pt-4'>
                </div>
                <div className='reasons-img mt-4'>
                <div id='img-3'/>
                </div>
                <div className='py-4 border-0 reasons-header'>
                  <span>Retina Ready</span>
                </div>
                <CardBody>
                    <span className='cardbody-text'>
                    Realize importance of social proof in customer’s purchase decision.
                    </span>
                </CardBody>
              
              </Card>
            </Col>
          </Row>
          
      </Container>
      </section>
    )
};

export default Reasons;