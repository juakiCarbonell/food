import React from 'react';
import { Flex } from 'reflexbox/styled-components';
import Card from './Card';
import styled from "styled-components";
import { layout, space } from 'styled-system';

const StyledCardContainer = styled(Flex)`
  border: 1px solid black;
  ${layout}
  ${space}
`

const CardContainer = (props) => {
  return (
    <StyledCardContainer {...props} >
      <Card />
      <Card />
      <Card />
    </StyledCardContainer>
  );
};

export default CardContainer;