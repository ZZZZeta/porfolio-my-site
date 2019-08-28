import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../components/about/Container';

const AboutWrapper = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class About extends Component {
    
    render() { 
        return ( 
        <AboutWrapper>
            <Container />
        </AboutWrapper>
        );
    }
}
 
export default About;