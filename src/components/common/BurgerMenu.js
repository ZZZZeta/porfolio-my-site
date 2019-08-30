import React, { Component } from 'react';
import styled from 'styled-components';

import SideBar from './SideBar';
import burgerIcon from '../../img/burger-menu.svg';

const BurgerMenuImg = styled.img`
    width: 2rem;
    height: 2rem;
    display: none;

    @media ${props => props.theme.mediaQueries.medium} {
    display: inline-block;
    }
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
            <>
                <BurgerMenuImg 
                src = {burgerIcon}
                onClick = {this.toogleMenu}
                />
                {sideBar}
            </>
         );
    }
}
 
export default BurgerMenu;