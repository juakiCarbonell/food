import React, {useState} from 'react';
import styled from 'styled-components';
import Brand from './Brand';
import Burger from './Burger';
import CollapseMenu from './CollapseMenu';
import logo from '../../multimedia/images/logo.png'

const NavBarContainer = styled.nav`
  position: fixed;
  width: 100%;
  background-color: red;
  z-index: 5;
`
const FlexBox = styled.nav`
  width: 90%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  height: 5rem;
`

const NavBar = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open)
  }


  return (
    <>
      <NavBarContainer>
        <FlexBox>
          <Brand logo={logo} />
          <Burger open={open} handleClick={handleClick}/>
        </FlexBox>
      </NavBarContainer>
      <CollapseMenu open={open}/>
    </>
  );
};

export default NavBar;