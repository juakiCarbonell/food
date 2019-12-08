import React from 'react';
import styled from 'styled-components';
import { setColor} from '../styles';
import { NavLink } from 'react-router-dom';

const CollapseWrapper = styled.div`
  background: ${setColor.darkRed};
  position: fixed;
  top: 4.5rem;
  right: 0;
  z-index: 3;
  height: 100vh;
  width: 45vw;
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
  transition: transform 1s linear;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  
  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: ${setColor.black};
    text-transform: capitalize;
    text-decoration: none;
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
`;


const CollapseMenu = (props) => { 
  if(props.open){
    return (
      <CollapseWrapper {...props}>
        <NavLinks>
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/how_it_works">How it Works</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/about">About Me</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          
        </NavLinks>
        
      </CollapseWrapper>
    );

  }
  return null;
  
};

export default CollapseMenu;