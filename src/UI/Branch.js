import React from 'react';
import { space } from "styled-system";
import styled from "styled-components";
import { Box } from 'reflexbox'

import Icon from './Icon'

const StyledBranch = styled.div`
  ${space}
  min-height: 22px;
  line-height: 22px;
  border:none;
  outline: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
`;

const Branch = (props) => {
  console.log(props)
  return (
    <StyledBranch {...props}>
      <Icon/>
      <Box m={2}>Branch</Box>
    </StyledBranch>
  );
};


export default Branch;