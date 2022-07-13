import React from 'react';
import { Bars, Nav, NavLogo, NavIcon, NavLink } from './NavbarElements';
import Logo from '../../images/Logo.png';

const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
        <NavLink to='/'>
          <NavLogo src={Logo}/>
        </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
    </Nav>
    </>
  )
}

export default Navbar;