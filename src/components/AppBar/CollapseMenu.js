import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { setColor } from '../../UI/styles';

const CollapseWrapper = styled.div`
  background: ${setColor.darkRed};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' :'translateX(100%)'};
  /* transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'}; */
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


const CollapseMenu = ({ open, clicked }) => { 
  console.log('ee')
  return (
    <CollapseWrapper open={open}>
      <NavLinks>
        <li><NavLink to="/" exact onClick={() => clicked(false)}>Home</NavLink></li>
        <li><NavLink to="/how_it_works" onClick={() => clicked(false)}>How it Works</NavLink></li>
        <li><NavLink to="/menu" onClick={() => clicked(false)}>Menu</NavLink></li>
        <li><NavLink to="/about" onClick={() => clicked(false)}>About Me</NavLink></li>
        <li><NavLink to="/contact" onClick={() => clicked(false)}>Contact</NavLink></li>
        
      </NavLinks>
      
    </CollapseWrapper>
  );
  
};

export default CollapseMenu;