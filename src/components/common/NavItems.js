import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;

  @media ${props => props.theme.mediaQueries.medium} {
    display: none;
  }
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

const NavItems = () => {

  return ( 
    <>
      <Ul>
        <Li><StyledNavLink exact to='/' activeClassName='active'>Home</StyledNavLink></Li>
        <Li><StyledNavLink exact to='/about' activeClassName='active'>About me</StyledNavLink></Li>
        <Li><StyledNavLink exact to='/portfolio' activeClassName='active'>Portfolio</StyledNavLink></Li>
      </Ul>
    </>
   );
}
 
export default NavItems;