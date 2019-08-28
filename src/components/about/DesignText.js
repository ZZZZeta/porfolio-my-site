import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
    width: 50%;
    max-width: 30%;
    height: 100%;
    margin-left: 2rem;
`;

const StyledTitle = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: #4a4a48;
`;

const StyledText = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: #4a4a48;
    margin-top: 2.5rem;
`;

const DesignText= () => {

    return ( 
        <TextWrapper>
            <StyledTitle>I can design things.</StyledTitle>
            <StyledText>
                As a web-developer, I am making a visual presentation of the product.
                I want to keep it simple, nice looking and follow common design trends. 
            </StyledText>
        </TextWrapper>
     );
}
 
export default DesignText;