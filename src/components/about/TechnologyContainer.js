import React, { Component } from 'react';
import styled from 'styled-components';
import TechnologyImage from './TechnologyImage';
import TechnologyText from './TechnologyText';

const Wrapper = styled.div`
    width: 100%;
    height: 20rem;
    display: flex;
    justify-content: center;
    margin: 5rem auto;
`;

class TechnologyContainer extends Component {
    
    render() { 
        return ( 
            <Wrapper>
                <TechnologyImage />
                <TechnologyText />
            </Wrapper>
         );
    }
}
 
export default TechnologyContainer;