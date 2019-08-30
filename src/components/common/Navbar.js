import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import NavItems from './NavItems';
import SideBar from './SideBar';


const NavbarWrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadein .5s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 124rem;
  display: flex;
  justify-content: space-between;
`;

class Navbar extends Component {
    
    render() { 
        return ( 
            <NavbarWrapper>
              <Nav>
                <Logo />
                <NavItems />
                <SideBar />
              </Nav>
            </NavbarWrapper>
         );
    }
}
 
export default Navbar;