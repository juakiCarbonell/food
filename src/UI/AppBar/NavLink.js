import React from 'react';
import styled from 'styled-components';

const StyledNavLink = styled.li`
  & a {
    padding: 1rem;
    outline: 1px solid red;
    text-decoration: none;
    color: black;
    cursor: pointer;
    &:hover {
      text-decoration: none;
      color: red
    }
  }
`

const NavLink = ({text}) => {
  return (
    <StyledNavLink>
      <a href="/">{text}</a>
    </StyledNavLink>
  );
};

export default NavLink;