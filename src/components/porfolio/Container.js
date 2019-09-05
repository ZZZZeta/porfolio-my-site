import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

class Container extends Component {
    
    render() { 
        return ( 
            <Wrapper>
                There is nothing to show now :)
            </Wrapper>
         );
    }
}
 
export default Container;