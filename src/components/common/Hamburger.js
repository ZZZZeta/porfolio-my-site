import React, { Component } from 'react';
import styled from 'styled-components';

import hambLogo from '../../img/burger-menu.svg';

const MenuWrapper = styled.div`
    display: none;
    justify-content: center;
    align-items: center;

    @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
  }
`;

const StyledImg = styled.img`
    width: 3rem;
    height: 3rem;
    cursor: pointer;
`;

class Havburger extends Component {
    state = { isClicked: false }

    toogleMenu = () => {
        this.setState( { isClicked: !this.state.isClicked } );
    }
    
    render() { 
        return ( 
            <MenuWrapper onClick = {this.toogleMenu} >
                <StyledImg src = {hambLogo} />
            </MenuWrapper>
         );
    }
}
 
export default Havburger;