import React from 'react';
import styled from "styled-components";
import {setFont} from '../UI/styles';


const StyledTitle = styled.h3`
  font-size: 2rem;
  text-transform: capitalize;
  letter-spacing: 5px;
  ${setFont.secondary};
  text-align: ${props => props.center ? "center" : "left"};
`

const Title = ({title, ...props}) => {
  return (
    <StyledTitle {...props}>
      {title}
    </StyledTitle>
  );
};

export default Title;