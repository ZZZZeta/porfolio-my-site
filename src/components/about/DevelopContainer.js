import React, { Component } from 'react';
import styled from 'styled-components';
import DevelopImage from './DevelopImage';
import DevelopText from './DevelopText';

const Wrapper = styled.div`
    width: 100%;
    height: 20rem;
    display: flex;
    justify-content: center;
    margin: 5rem auto;
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