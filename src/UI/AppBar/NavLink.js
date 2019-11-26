import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import {Link, NavLink} from 'react-router-dom';


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

const NavLinkItem = (props) => {
  return (
    <StyledNavLink {...props}>
      <Link to={props.route}>{props.text}</Link>
    </StyledNavLink>
  );
};

export default NavLinkItem;