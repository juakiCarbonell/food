import React from 'react';
import { Flex } from 'reflexbox/styled-components';
import Card from './Card';
import styled from "styled-components";
import { space } from 'styled-system';

const StyledCardContainer = styled(Flex)`
  border: 1px solid black;
  flex-direction: ${props => props.isMobile ? "column" : "row"}
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