import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCalendarAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';
import Section from '../Section';
import Title from '../Title';
import styled from "styled-components";
import {setColor} from '../styles';
import PrimaryBtn from '../Buttons'

const StyledSteps = styled.div `
  margin: 1rem auto;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 1rem;
  }
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    border-radius: 50%;
  }
  .step-icon {
    font-size: 4rem;
  }
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

          <div className="step">
            <p>Step 1</p>
            <FontAwesomeIcon icon={faMobileAlt} className="step-icon"/>
            <p>Contact Me</p>
          </div>
          <div className="step-separator"></div>

          <div className="step">
            <p>Step 2</p>
            <FontAwesomeIcon icon={faCalendarAlt} className="step-icon"/>
            <p>Arrange a date</p>
          </div>
          <div className="step-separator"></div>
          
          <div className="step">
            <p>Step 3</p>
            <FontAwesomeIcon icon={faUtensils} className="step-icon"/>
            <p>I cook, you enjoy</p>
          </div>
          </StyledSteps>
          <PrimaryBtn>Read More</PrimaryBtn>
        </StyledContainer>
    </Section>
  );
};

export default HowItWorks;