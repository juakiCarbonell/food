import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';


const StyledNavLink = styled.li`
  & a {
    padding: 1rem;
    outline: 1px solid red;
    text-decoration: none;
    ${color}
    text-transform: uppercase;
    cursor: pointer;
    ${color}
    &:hover {
      text-decoration: none;
      color: red
    }
  }
`

const NavLink = (props) => {
  return (
    <StyledNavLink {...props}>
      <a href="/">{props.text}</a>
    </StyledNavLink>
  );
};

export default NavLink;