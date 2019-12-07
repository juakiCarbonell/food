import React from 'react';
import styled from 'styled-components';
import NavLinkItem from './NavLink';
import {setColor} from '../styles';


const StyledNavLinks = styled.ul`
  justify-self: end;
  list-style-type: none;
  display: flex;
  /* flex-direction: ${props => props.navbarState ? "row": "column" }; */
  @media (max-width: 768px) {
      display: none;
    }
`

const NavLinks = (props) => {

  return (
    <StyledNavLinks {...props}>
      <NavLinkItem text="Home" color={setColor.black} route="/"/>
      <NavLinkItem text="How it works" color={setColor.black} route="/how_it_works"/>
      <NavLinkItem text="Menu" color={setColor.black} route="/menu"/>
      <NavLinkItem text="About" color={setColor.black} route="/about"/>
      <NavLinkItem text="Contact" color={setColor.black} route="/contact"/>
    </StyledNavLinks>
  );
};

export default NavLinks;