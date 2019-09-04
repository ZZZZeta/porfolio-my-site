import React, { Component } from 'react';
import styled from 'styled-components';

import Container from '../components/home/Container';

const HomeWrapper = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${props => props.theme.mediaQueries.medium} {
        height: 100vh;
    }
`;


class Home extends Component {
    
    render() { 
        return ( 
            <HomeWrapper>
                <Container />
            </HomeWrapper>
         );
    }
}
 
export default Home;