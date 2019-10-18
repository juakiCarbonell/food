import React from 'react';
import { Flex, Box } from 'reflexbox'
import Button from './Button'
import Branch from './Branch'
import styled from "styled-components";
import { color } from "styled-system";


const StyledBranch = styled(Flex)`
  height: 70px;
  width: 100%;
  outline: 1px solid black;
  ${color}
`



const NavBar = (props) => {
  return (
    <StyledBranch {...props}>
      <Branch m={2} p={2}>Branch</Branch>
      <Box mx='auto' />
      <Flex mx={3}>
        <Button variant='primary' m={0} px={2}>Primary</Button>
        <Button variant='primary' m={0} px={2}>Primary</Button>
      </Flex>
    </StyledBranch>
  );
};

NavBar.defaultProps = {
  bg: "yellow",
};

export default NavBar;