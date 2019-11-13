import React from 'react';
import styled from 'styled-components';



const CollapseWrapper = styled.div`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 3;
  /* transform: ${({ open }) => open ? 'translateX(40%)' : 'translateX(0%)'};
  transition: transform 0.3s ease-in-out; */
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
          <li><a href="/">link n1</a></li>
          <li><a href="/">link n2</a></li>
          <li><a href="/">link n3</a></li>
          <li><a href="/">link n4</a></li>
        </NavLinks>
        
      </CollapseWrapper>
    );

  }
  return null;
  
};

export default CollapseMenu;