import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const StiledNavLinks = styled.ul`
  justify-self: end;
  list-style-type: none;
  display: flex;
  @media (max-width: 768px) {
      display: none;
    }
`



const NavLinks = () => {

  return (
    <StiledNavLinks>
      <NavLink text="Link 1"/>
      <NavLink text="Link 2"/>
      <NavLink text="Link 3"/>
    </StiledNavLinks>
  );
};

export default NavLinks;