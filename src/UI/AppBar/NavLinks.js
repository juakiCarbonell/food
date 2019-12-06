import React from 'react';
import styled from 'styled-components';
import NavLinkItem from './NavLink';


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
      <NavLinkItem text="Home" color="white" route="/"/>
      <NavLinkItem text="How it works" color="white" route="/how_it_works"/>
      <NavLinkItem text="Menu" color="white" route="/menu"/>
      <NavLinkItem text="About" color="white" route="/about"/>
      <NavLinkItem text="Contact" color="white" route="/contact"/>
    </StyledNavLinks>
  );
};

export default NavLinks;