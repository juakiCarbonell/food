import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import {NavLink} from 'react-router-dom';
import {setColor} from '../styles';


const StyledNavLink = styled.li`
  & a {
    padding: 1rem;
    text-decoration: none;
    ${color}
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
      text-decoration: none;
      color: ${setColor.white};
      background-color: ${setColor.activeDarkRed};
    }
  }
  .selected {
    font-weight: bold;
    color: ${setColor.white};
    background-color: ${setColor.activeDarkRed};
  }
`

const NavLinkItem = (props) => {
  return (
    <StyledNavLink {...props}>
      <NavLink exact to={props.route} activeClassName="selected">{props.text}</NavLink>
    </StyledNavLink>
  );
};

export default NavLinkItem;