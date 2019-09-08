import React, { Component } from 'react';
import styled from 'styled-components';
import DevelopImage from './DevelopImage';
import DevelopText from './DevelopText';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 5rem auto;

    @media ${props => props.theme.mediaQueries.medium} {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

class DevelopContainer extends Component {
    
    render() { 
        return ( 
            <Wrapper>
                <DevelopText />
                <DevelopImage />
            </Wrapper>
         );
    }
}
 
export default DevelopContainer;