import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
    width: 50%;
    max-width: 30%;
    height: 100%;
    margin-left: 2rem;

    @media ${props => props.theme.mediaQueries.medium} {
        margin-left: 0rem;
        width: 100%;
        max-width: 100%;
    }
`;

const StyledTitle = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: #4a4a48;

    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 1.6rem;
        margin-top: 2rem;
    }
`;

const StyledText = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: #4a4a48;
    margin-top: 2.5rem;

    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 1.2rem;
        margin-top: 1rem;
    }
`;

const TechnologyText = () => {

    return ( 
        <TextWrapper>
            <StyledTitle>
                Technologies, I have experience with:
            </StyledTitle>
            <StyledText>
                &bull; React, Redux <br/>
                &bull; JavaScript (ES6+) <br/>
                &bull; HTML, CSS <br/>
                &bull; SASS, SCSS
            </StyledText>
        </TextWrapper>
     );
}
 
export default TechnologyText;