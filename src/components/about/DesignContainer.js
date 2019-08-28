import React, { Component } from 'react';
import styled from 'styled-components';
import DesignImage from './DesignImage';
import DesignText from './DesignText';

const Wrapper = styled.div`
    width: 100%;
    height: 20rem;
    display: flex;
    justify-content: center;
    margin: 5rem auto;
`;

class DesignContainer extends Component {
    
    render() { 
        return ( 
            <Wrapper>
                <DesignImage />
                <DesignText />
            </Wrapper>
         );
    }
}
 
export default DesignContainer;