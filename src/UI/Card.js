import React from 'react';
import { Flex } from 'reflexbox/styled-components';
import styled from "styled-components";
import { layout } from 'styled-system';
import Text from './Text';

import Image from './Image'

const StyledCard = styled(Flex)`
  border: 1px solid black;
  ${layout}
`

const Card = (props) => {
  return (
    <StyledCard 
      width={[1, 1 / 2, 1 / 4]}
      mx = "auto" 
      {...props}
    > 
      <Image />        
      <Text text="Berlin" textAlign='center' mt={1} fontSize={3}/>        
    </StyledCard>
  );
};

Card.defaultProps = {
  p: 2,
  flexDirection: 'column'
};

export default Card;