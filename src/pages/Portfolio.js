import React, { Component } from 'react';
import styled from 'styled-components';

import Container from '../components/porfolio/Container';

const PortfolioWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

class Portfolio extends Component {
    
    render() { 
        return ( 
            <PortfolioWrapper>
                <Container />
            </PortfolioWrapper>
         );
    }
}
 
export default Portfolio;