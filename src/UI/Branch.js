import React from 'react';
import { space, typography } from "styled-system";
import styled from "styled-components";


import Text from './Text';

const StyledBranch = styled.div`
  ${space}
  ${typography}
  border:none;
  outline: 1px solid black;
  cursor: pointer;
`;

const Branch = (props) => {
  console.log (props)
  return (
    <StyledBranch {...props}>
      <Text text="Branch" textAlign='center'></Text>
    </StyledBranch>
  );
};


export default Branch;