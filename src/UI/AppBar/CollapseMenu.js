import React from 'react';
import styled from 'styled-components';
import { setColor} from '../styles';
import {Link} from 'react-router-dom';


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
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;


const CollapseMenu = (props) => { 
  if(props.open){
    return (
      <CollapseWrapper {...props}>
        <NavLinks>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">How it Works</Link></li>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/">Contact</Link></li>
          
        </NavLinks>
        
      </CollapseWrapper>
    );

  }
  return null;
  
};

export default CollapseMenu;