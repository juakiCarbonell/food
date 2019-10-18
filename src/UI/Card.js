import React from 'react';
import { Flex, Box } from 'reflexbox';
import styled from "styled-components";
import { layout } from 'styled-system'

import Image from './Image'

const StyledCard = styled(Flex)`
  border: 1px solid black;
  ${layout}
`

const Card = (props) => {
  return (
    <StyledCard width={[1, 1 / 2, 1 / 4]} {...props}>
      <Image />        
      <Box />        
    </StyledCard>
  );
};

Card.defaultProps = {
  p: 2
};

export default Card;