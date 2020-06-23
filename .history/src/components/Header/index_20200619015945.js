import React from 'react';
import './header.scss';
import { Container, Row, Col } from 'reactstrap';


const Header = () => {
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