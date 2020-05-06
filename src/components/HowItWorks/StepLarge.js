import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";

const StyledStep = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  border-radius: 50%;
  .step-icon {
    font-size: 4rem;
  }
  @media (min-width: 576px){
    margin: 0;
    text-align: center;
  }

`



const Step = ({icon, title, text}) => {
  return (
    <StyledStep>
      <p>{title}</p>
      <FontAwesomeIcon icon={icon} className="step-icon"/>
      <p>{text}</p>
    </StyledStep>
  );
};

export default Step;