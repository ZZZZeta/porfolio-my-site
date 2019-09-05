import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin: 3rem auto;

    @media ${props => props.theme.mediaQueries.medium} {
        margin: 2rem auto;
    }
`;

const StyledTitle = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: #4a4a48;

    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 2.4rem;
        font-weight: 600;
    }
`;

const Title = () => {

    return ( 
        <TitleWrapper>
            <StyledTitle>
                What I can do
            </StyledTitle>
        </TitleWrapper>
     );
}
 
export default Title;