import React from 'react';
import { Flex } from 'reflexbox';
import Card from './Card';
import styled from "styled-components";
import { layout } from 'styled-system';

const StyledCardContainer = styled(Flex)`
  border: 1px solid black;
  ${layout}
`

const CardContainer = (props) => {
  return (
    <StyledCardContainer {...props}>
      <Card />
      <Card />
      <Card />
    </StyledCardContainer>
  );
};

export default CardContainer;