import React from 'react';
import Section from '../UI/Section';
import styled from "styled-components";
import { faMobileAlt, faCalendarAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';
import cookingImage from '../multimedia/images/about_cooking.jpg';
import ingredientsImage from '../multimedia/images/about_ingredients.jpg';
import ImageContainer from '../UI/About/AboutImageContainer';
import TextContainer from '../UI/About/AboutTextContainer';
import { useMediaQuery } from 'react-responsive';
import {setColor} from '../UI/styles';
import Step from '../UI/HowItWorks/Step';

const AboutCenterTop = styled.div`
  width: 90vw;
  margin: 6rem auto 2rem;
  .about-section {
    margin-bottom: 3rem;
  }

  
  @media (min-width: 1200px){
    margin-top: 6rem;
    max-width: 1170px;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`

const AboutCenter = styled(AboutCenterTop)`
  margin: 2rem auto;
  @media (min-width: 1200px){
    margin-top: 2rem;
  }
`


const HowItWorks = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })

  return (
    <>
      <Section>
        <AboutCenterTop>
          <Step 
            icon={faMobileAlt}
            title="Step 1"
            text="Contact Me"
          />
        </AboutCenterTop>
      </Section>
      <Section color={setColor.grey}>
        <AboutCenter>
          <Step 
            icon={faCalendarAlt}
            title="Step 2"
            text="Arrange a date"
          />      
        </AboutCenter>
      </Section>
      <Section>
        <AboutCenter>
          <Step 
            icon={faUtensils}
            title="Step 3"
            text="I cook, you enjoy"
          />
        </AboutCenter>
      </Section>
    </>
  );
};

export default HowItWorks;