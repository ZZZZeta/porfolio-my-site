import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
    width: 50%;
    max-width: 30%;
    height: 100%;
    margin-right: 2rem;
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

const DevelopText = () => {

    return ( 
        <TextWrapper>
            <StyledTitle>
                I can develop things.
            </StyledTitle>
            <StyledText>
                I'm a developer, so I know how to create website to run across devices using the latest technologies available.
            </StyledText>
        </TextWrapper>
     );
}
 
export default DevelopText;