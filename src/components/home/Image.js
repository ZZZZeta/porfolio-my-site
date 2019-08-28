import React from 'react';
import styled from 'styled-components';

import mainImage from '../../img/main.svg';

const ImageWrapper = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    @media ${props => props.theme.mediaQueries.medium} {
        width: 90%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
`;

const Image = () => {

    return (
        <ImageWrapper>
            <StyledImage src={mainImage} />
        </ImageWrapper>
    )
}

export default Image;