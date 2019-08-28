import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
    width: 100%;
    max-width: 37rem;
    margin: 1rem 3rem;

    @media ${props => props.theme.mediaQueries.medium} {
        margin: 1rem 0rem;
    }
`;

const StyledText = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: #4a4a48;

    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 1.2rem;
    }
`;

const StyledPhrase = styled.span`
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: #c19898;
    
    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 1.2rem;
    }
`;

const Info = () => {

    return ( 
        <InfoWrapper>
            <StyledText>
                I am <StyledPhrase>self-taught web-developer</StyledPhrase> and student in Kyiv Polytechnic Institute.
                I constantly try to learn more about <StyledPhrase>web-development</StyledPhrase> and about programming in general.
                I always want to <StyledPhrase>learn more</StyledPhrase>, <StyledPhrase>do more</StyledPhrase>, and <StyledPhrase>be more</StyledPhrase>.
            </StyledText>
        </InfoWrapper>
     );
}
 
export default Info;