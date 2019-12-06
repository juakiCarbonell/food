import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import {NavLink} from 'react-router-dom';


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
  .selected {
    font-weight: bold;
  }
  }
`

const NavLinkItem = (props) => {
  return (
    <StyledNavLink {...props}>
      <NavLink to={props.route} activeClassName="selected">{props.text}</NavLink>
    </StyledNavLink>
  );
};

export default NavLinkItem;