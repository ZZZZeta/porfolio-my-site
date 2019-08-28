import React, { Component } from 'react';
import styled from 'styled-components';

import Title from './Title';
import Info from './Info';
import Button from './Button';

const Wrapper = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;

    @media ${props => props.theme.mediaQueries.medium} {
        width: 90%;
        align-items: center;
    }
`;

class InfoContainer extends Component {
    
    render() { 
        return ( 
            <Wrapper>
                <Title />
                <Info />
                <Button />
            </Wrapper>
         );
    }
}
 
export default InfoContainer;