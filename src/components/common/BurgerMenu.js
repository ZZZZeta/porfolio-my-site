import React, { Component } from 'react';
import styled from 'styled-components';

import SideBar from './SideBar';
import burgerIcon from '../../img/burger-menu.svg';

const BurgMenuWrapper = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;

    @media ${props => props.theme.mediaQueries.medium} {
        display: flex;
    }
`;

const BurgerMenuImg = styled.img`
    width: 2rem;
    height: 2rem;
`;

class BurgerMenu extends Component {
    state = { isOpened: false }

    toogleMenu = () => {
        this.setState( { isOpened: !this.state.isOpened } )
    }
    
    render() {
        let sideBar;

        if(this.state.isOpened) {
            sideBar = <SideBar toogleMenu = {this.toogleMenu} />
        }
        
        return ( 
            <BurgMenuWrapper>
                <BurgerMenuImg 
                src = {burgerIcon}
                onClick = {this.toogleMenu}
                />
                {sideBar}
            </BurgMenuWrapper>
         );
    }
}
 
export default BurgerMenu;