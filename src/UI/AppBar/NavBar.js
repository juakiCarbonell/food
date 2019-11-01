import React, { useState } from 'react';
import styled from "styled-components";
import {useSpring, animated} from 'react-spring';
import BurgerMenu from './BurgerMenu';
import Brand from './Brand';
import NavLinks from './NavLinks';
import CollapseMenu from './CollapseMenu';


const NavBar = (props)  => {

  const [navBarOpen, setNavBarOpen] = useState(false);  

  const navBarAnimation = useSpring({
    from: {transform: 'translate(0,-5rem)'},
    transform: 'translate(0,0)'
  })


  const StyledNavBar = styled(animated.nav)`
    width: 100%;
    top: 0;
    left: 0;
    background: #AAA;
  `;

  const FlexContainer = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    display: flex;
    /* padding: 0 2rem; */
    justify-content: space-between;
    height: 5rem;
    align-items: center;
  `;

  const handleNavbar = () =>{
    setNavBarOpen(!navBarOpen)
  }

  return (
    <>
      <StyledNavBar style={navBarAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks />
          <BurgerMenu 
            handleClick={handleNavbar}
            navbarState={navBarOpen} 
          />
        </FlexContainer>
      </StyledNavBar>
      <CollapseMenu 
        navbarState={navBarOpen} 
      />
    </>
  
  );
};


export default NavBar;