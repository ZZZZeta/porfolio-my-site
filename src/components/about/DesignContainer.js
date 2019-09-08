import React, { Component } from 'react';
import styled from 'styled-components';
import DesignImage from './DesignImage';
import DesignText from './DesignText';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 5rem auto;

    @media ${props => props.theme.mediaQueries.medium} {
        flex-direction: column;
        align-items: center;
    }
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