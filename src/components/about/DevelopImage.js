import React from 'react';
import styled from 'styled-components';

import developImage from '../../img/developer.svg';

const ImageWrapper = styled.div`
    width: 50%;
    max-width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;

    @media ${props => props.theme.mediaQueries.medium} {
        width: 100%;
        max-width: 100%;
    }
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