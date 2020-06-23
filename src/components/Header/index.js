import React from 'react';
import './header.scss';
import { Container } from 'reactstrap';


const Header = () => {
    return (
      <header className='header bg-image'>
      <Container>
          <div className='navbar-brand'>
          AppCo
            </div> 
      </Container>
      </header>
    )
};

export default Header;