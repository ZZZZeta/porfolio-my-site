import React from 'react';
import styled from 'styled-components';

import technologyImage from '../../img/technology.svg';

const ImageWrapper = styled.div`
    width: 50%;
    max-width: 30%;
    height: 100%;
    margin-right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
`;

const TechnologyImage = () => {

    return ( 
        <ImageWrapper>
            <StyledImage src={technologyImage} />
        </ImageWrapper>
     );
}
 
export default TechnologyImage;