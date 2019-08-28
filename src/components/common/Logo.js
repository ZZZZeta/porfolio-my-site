import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import mainLogo from '../../img/logo.png';

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImg = styled.img`
    width: 7rem; 
    height: 7rem;
`;

const Logo = () => {

    return ( 
        <LogoWrapper>
            <NavLink exact to='/'>
                <StyledImg src={mainLogo} />
            </NavLink> 
        </LogoWrapper>
     );
}
 
export default Logo;