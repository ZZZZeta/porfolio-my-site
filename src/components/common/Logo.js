import React from 'react';
import styled from 'styled-components';

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
            <StyledImg src={mainLogo} />
        </LogoWrapper>
     );
}
 
export default Logo;