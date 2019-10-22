import React from 'react';
import { Box } from 'reflexbox/styled-components';
import styled from "styled-components";
import { space, typography } from "styled-system";


const StyledText = styled(Box)`
  width: 100%
  ${typography}
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