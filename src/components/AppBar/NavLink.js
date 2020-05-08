import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { setColor } from "../../UI/styles";

const StyledNavLink = styled.li`
  & a {
    padding: 1rem;
    text-decoration: none;
    color: ${setColor.white};
    text-transform: capitalize;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      text-decoration: none;
      color: ${setColor.black};
      /* background-color: ${setColor.activeDarkRed}; */
    }
  }
  .selected {
    font-weight: bold;
    color: ${setColor.black};
    /* background-color: ${setColor.activeDarkRed}; */
  }
`;

const NavLinkItem = (props) => {
  return (
    <StyledNavLink {...props}>
      <NavLink exact to={props.route} activeClassName="selected">
        {props.text}
      </NavLink>
    </StyledNavLink>
  );
};

export default NavLinkItem;
