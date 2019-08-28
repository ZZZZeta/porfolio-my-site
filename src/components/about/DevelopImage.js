import React from 'react';
import styled from 'styled-components';

import developImage from '../../img/developer.svg';

const ImageWrapper = styled.div`
    width: 50%;
    max-width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
`;

const DevelopImage = () => {

    return ( 
        <ImageWrapper>
            <StyledImage src={developImage} />
        </ImageWrapper>
     );
}
 
export default DevelopImage;