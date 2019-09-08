import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ButtonWrapper = styled.div`
    width: 100%;
    max-width: 37rem;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 3rem;

    @media ${props => props.theme.mediaQueries.medium} {
        margin-left: 0px;
    }
`;

const StyledButton = styled.button`
    margin-top: 2.5rem;
    background-color: #c19898;
    border: none;
    text-align: center;
    text-decoration: none;
    font-size: 1.3rem;
    transition-duration: .3s;

    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 2.5rem;
    }

    &:hover {
        transform: translateY(-5px);
    }
`;

const StyledNavLink = styled(NavLink)`
    padding: 10px 25px;
    display: block;
    text-decoration: none;
    color: #ebebe3;
`;

const Button = () => {

    return ( 
        <ButtonWrapper>
            <StyledButton>
                <StyledNavLink to='about' >Read more &raquo;</StyledNavLink>
            </StyledButton>
        </ButtonWrapper>
     );
}
 
export default Button;
