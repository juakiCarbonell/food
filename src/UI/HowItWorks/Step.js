import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";
import {setColor} from '../styles';
import Title from '../Title';

const StyledStep = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 2 auto;
  /* border-radius: 3px; */
  /* border: 1px solid black; */
  .step-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0.2rem;
  }
  .number-container {
    width: 60px;
    height: 60px;
    border: 2px solid ${setColor.black};
    border-radius: 50%;
    text-align: center;
    line-height: 60px;
    margin-bottom: 1rem;
  }
  @media (min-width: 576px){
    margin: 0;
    text-align: center;
    
  }
  

`



const Step = ({icon, number, text}) => {
  return (
    <StyledStep>
      <FontAwesomeIcon icon={icon} className="step-icon"/>
      <p>Step</p>
      <div className="number-container">
        {number}
      </div>
      <Title title={text} center></Title>
    </StyledStep>
  );
};

export default Step;