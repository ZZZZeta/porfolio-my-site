import React, { Component } from 'react';
import styled from 'styled-components';

import Container from '../components/home/Container';

const HomeWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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