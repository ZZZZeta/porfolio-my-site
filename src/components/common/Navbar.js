import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Logo from './Logo';

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

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`;

const Li = styled.li`
  margin: 10px 20px;
`;

const StyledNavLink = styled(NavLink)`
  width: 10rem;
  text-align: center;
  color: #4a4a48;
  text-decoration: none;
  padding: 8px; 
  display: block;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  transition-duration: .1s;

  &:hover {
    border-bottom: 2px solid #c19898;
  }

  &.active {
    border-bottom: 2px solid #c19898;
  }
`;


class Navbar extends Component {
    
    render() { 
        return ( 
            <NavbarWrapper>
              <Nav>
                <Logo />
                <Ul>
                  <Li><StyledNavLink exact to='/' activeClassName='active'>Home</StyledNavLink></Li>
                  <Li><StyledNavLink exact to='/about' activeClassName='active'>About me</StyledNavLink></Li>
                  <Li><StyledNavLink exact to='/portfolio' activeClassName='active'>Portfolio</StyledNavLink></Li>
                </Ul>
              </Nav>
            </NavbarWrapper>
         );
    }
}
 
export default Navbar;