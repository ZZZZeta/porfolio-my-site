import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
    width: 30rem;
    height: 100vh;
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #c19898;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
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


const SideBar = () => {

    return ( 
        <Wrapper>
            <Ul>
                <Li><StyledNavLink exact to='/' activeClassName='active'>Home</StyledNavLink></Li>
                <Li><StyledNavLink exact to='/about' activeClassName='active'>About me</StyledNavLink></Li>
                <Li><StyledNavLink exact to='/portfolio' activeClassName='active'>Portfolio</StyledNavLink></Li>
            </Ul>
        </Wrapper>
     );
}
 
export default SideBar;