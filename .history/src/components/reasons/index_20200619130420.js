import React from 'react';
import './header.scss';
import { Container, Row, Col } from 'reactstrap';


const Header = () => {
    return (
      <section className='header'>
      <Container>
          <div className='navbar-brand'>
          AppCo
            </div> 
      </Container>
      </section>
    )
};

export default Header;