import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { BiFoodMenu } from 'react-icons/bi';

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    font-weight: 700;    
    margin-left: 10%;
`;
export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    cursor: pointer;
    
    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavLogo = styled.img`
    width: 100%;
    height: 100%;
    
    @media screen and (max-width: 400px) {
        width: 70%;
        height: 70%;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p{
        transform : translate(-175%, 100%);
        font-weight: bold;
    }
`;

export const Bars = styled(BiFoodMenu)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`;