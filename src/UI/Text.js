import React from 'react';
import { Box } from 'reflexbox';
import styled from "styled-components";
import { space } from "styled-system";


const StyledText = styled(Box)`
  width: 100%
  ${space}
`


const Text = (props) => {
  return (
    <StyledText {...props}>
      {props.text}
    </StyledText>
  );
};

export default Text;