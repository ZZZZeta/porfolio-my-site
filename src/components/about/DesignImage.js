import React from 'react';
import styled from 'styled-components';

import designImage from '../../img/design.svg';

const ImageWrapper = styled.div`
    width: 50%;
    max-width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
`;

const DesignImage = () => {

    return ( 
        <ImageWrapper>
            <StyledImage src={designImage} />
        </ImageWrapper>
     );
}
 
export default DesignImage;