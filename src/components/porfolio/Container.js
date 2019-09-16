import React, { Component } from 'react';
import styled from 'styled-components';

import Project from './Project';

const Wrapper = styled.div`
    width: 100%;
    max-width: 124rem;
    display: flex;
    justify-content: center;
`;

class Container extends Component {
    
    render() { 
        return ( 
            <Wrapper>
                <Project />
            </Wrapper>
         );
    }
}
 
export default Container;