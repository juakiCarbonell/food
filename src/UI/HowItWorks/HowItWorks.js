import React from 'react';
import { faMobileAlt, faCalendarAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';
import Section from '../Section';
import Title from '../Title';
import styled from "styled-components";
import {setColor} from '../styles';
import PrimaryBtn from '../Buttons';
import StepLarge from './StepLarge';
// import Step from './Step';

const StyledSteps = styled.div `
  margin: 1rem auto;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 1rem;
  }
  /* .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    border-radius: 50%;
  } */
  /* .step-icon {
    font-size: 4rem;
  } */
  .step-separator {
    border-left: 6px solid ${setColor.grey};
    height: 3rem;
  }

  @media (min-width: 576px){
    flex-direction: row;
    justify-content: space-around;
    .step {
      margin: 0;
      text-align: center;
    }
    .step-separator {
      border-top: 6px solid ${setColor.grey};
      width: 16rem;
      height: auto;
    }
  }
  
  @media (min-width: 1200px){
    width: 100vw;
    max-width: 1170px;
  }
  

`
const StyledContainer = styled.div `
  padding: 1.5rem;
  @media (min-width: 768px){
    margin: 0 auto;
  }
  @media (min-width: 1200px){
    width: 100vw;
    max-width: 1170px;
  }

`

const HowItWorks = () => {
  return (
    <Section>
      <Title title="How it works" center/>
      <StyledContainer>
        <StyledSteps>
          <StepLarge 
            icon={faMobileAlt}
            title="Step 1"
            text="Contact Me"
          />
          <div className="step-separator"></div>
          <StepLarge 
            icon={faCalendarAlt}
            title="Step 2"
            text="Arrange a date"
          />
          <div className="step-separator"></div>
          <StepLarge 
            icon={faUtensils}
            title="Step 3"
            text="I cook, you enjoy"
          />
        </StyledSteps>
        <PrimaryBtn>Read More</PrimaryBtn>
      </StyledContainer>
    </Section>
  );
};

export default HowItWorks;