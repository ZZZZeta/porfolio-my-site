import React, { Component } from 'react';
import styled from 'styled-components';

import Image from './Image';
import InfoContainer from './InfoContainer';

const Wrapper = styled.div`
    width: 100%;
    max-width: 124rem;
    height: 100%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadein .5s;

    @media ${props => props.theme.mediaQueries.medium} {
        flex-direction: column;
    }
`;

class Container extends Component {
    
    render() { 
        return ( 
            <Wrapper>
                <Image />
                <InfoContainer />
            </Wrapper>
         );
    }
}
 
export default Container;