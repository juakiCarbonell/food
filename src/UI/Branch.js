import React from 'react';
import { Flex } from 'reflexbox/styled-components';
import styled from "styled-components";
import { space } from "styled-system";
import { faHamburger } from '@fortawesome/free-solid-svg-icons';


import Icon from './Icon';
import Text from './Text';


const StyledBranch = styled(Flex)`
  outline: 1px solid black;
  ${space}
`


const Branch = (props) => {
  return (
    <StyledBranch {...props} alignItems="Center">
      <Icon icon={faHamburger}/>
      <Text ml={2} text="Branch" textAlign='center'></Text>
    </StyledBranch>
  );
};


export default Branch;