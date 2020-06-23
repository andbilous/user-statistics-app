import React from 'react';
import './header.scss';
import { Container, Row, Col } from 'reactstrap';


const Brain = () => {
    return (
      <header className='header'>
      <Container>
          <div className='navbar-brand'>
          AppCo
            </div> 
      </Container>
      </header>
    )
};

export default Header;