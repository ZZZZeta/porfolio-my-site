import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
    width: 100%;
    max-width: 37rem;
    margin: 1rem 3rem;
    
    @media ${props => props.theme.mediaQueries.medium} {
        margin: 1rem 0rem;
    }
`;

const StyeldTitle = styled.h1`
    color: #4a4a48;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.04em;

    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 2rem;
        font-weight: 600;
    }
`;

const StyledPhrase = styled.h2`
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    color: grey;

    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 1.2rem;
        font-weight: 500;
    }
`;

const Title = () => {

    return (
        <TitleWrapper>
            <StyeldTitle>
                Hello, <br/> I'm Yan Postnov  
            </StyeldTitle>
            <StyledPhrase>
                Web Developer
            </StyledPhrase>
        </TitleWrapper>
    )
}

export default Title;