import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './Title';
import DesignContainer from './DesignContainer';
import DevelopContainer from './DevelopContainer';
import TechnologyContainer from './TechnologyContainer';

const Wrapper = styled.div`
    width: 100%;
    max-width: 124rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class Container extends Component {
    
    render() { 
        return ( 
            <Wrapper>
                <Title />
                <DesignContainer />
                <DevelopContainer />
                <TechnologyContainer />
            </Wrapper>
         );
    }
}
 
export default Container;