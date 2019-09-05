import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import closeButton from '../../img/close-button.svg';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    overflow-x: hidden;
    top: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #c19898;
    animation: slideFromRight .4s;

    @keyframes slideFromRight {
      from {
        width: 0;
      }

      to {
        width: 100%;
      }
    }
`;

const Ul = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Li = styled.li`
  margin: 10px 20px;
`;

const StyledNavLink = styled(NavLink)`
  width: 10rem;
  text-align: center;
  color: black;
  text-decoration: none;
  padding: 8px; 
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  transition-duration: .1s;

  &:hover {
    border-left: 2px solid white;
  }

  &.active {
    border-left: 2px solid white;
  }
`;

const StyledImg = styled.img`
    width: 1.7rem;
    height: 1.7rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
`;


const SideBar = ({ toogleMenu}) => {

    return ( 
        <Wrapper>
            <StyledImg src={closeButton} onClick={toogleMenu} />
            <Ul>
                <Li><StyledNavLink exact to='/' activeClassName='active' onClick={toogleMenu}>Home</StyledNavLink></Li>
                <Li><StyledNavLink exact to='/about' activeClassName='active' onClick={toogleMenu}>About me</StyledNavLink></Li>
                <Li><StyledNavLink exact to='/portfolio' activeClassName='active' onClick={toogleMenu}>Portfolio</StyledNavLink></Li>
            </Ul>
        </Wrapper>
     );
}
 
export default SideBar;