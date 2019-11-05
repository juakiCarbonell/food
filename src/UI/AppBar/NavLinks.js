import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';


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
      <NavLink text="Link 1" color="white"/>
      <NavLink text="Link 2" color="white"/>
      <NavLink text="Link 3" color="white"/>
    </StyledNavLinks>
  );
};

export default NavLinks;