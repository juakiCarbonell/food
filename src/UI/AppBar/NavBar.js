import React from 'react';
import styled from "styled-components";
import { Flex} from 'reflexbox'
import {useSpring, animated} from 'react-spring';
import BurgerMenu from './BurgerMenu';
import Brand from './Brand';
import NavLinks from './NavLinks';


const NavBar = (props)  => {

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
    console.log('eee')
  }


  return (
    <StyledNavBar style={navBarAnimation}>
      <FlexContainer>
        <Brand />
        <NavLinks />
        <BurgerMenu handleClick={handleNavbar}/>
      </FlexContainer>
    </StyledNavBar>
  
  );
};


export default NavBar;