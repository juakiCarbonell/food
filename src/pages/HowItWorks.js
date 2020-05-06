import React from 'react';
import Section from '../UI/Section';
import styled from "styled-components";
import { faMobileAlt, faCalendarAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import {setColor} from '../UI/styles';
import Step from '../components/HowItWorks/Step';
import Title from '../UI/Title';

const AboutCenterTop = styled.div`
  width: 90vw;
  margin: 6rem auto 2rem;
  .about-section {
    margin-bottom: 3rem;
  }

  .step-text {
    letter-spacing: 2px;
    text-align: center;
    margin-top: 2rem;
    align-self: center;
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

const TitleContianer = styled.div`
  margin-top: 6rem;
`


const HowItWorks = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })

  return (
    <>
      <Section>
        <TitleContianer>
          <Title title="How it Works" center />
        </TitleContianer>
        <AboutCenterTop>
          <Step 
            icon={faMobileAlt}
            number="1"
            text="Contact Me"
          />
          <div className="step-text">
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou
            </p>
          </div>
        </AboutCenterTop>
      </Section>
      <Section color={setColor.grey}>
        <AboutCenter>
          {isDesktopOrLaptop ? 
            <>
              <div className="step-text">
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou
                </p>
              </div>
              <Step 
                icon={faCalendarAlt}
                number="2"
                text="Arrange a date"
              />
            </>  
            :
            <>
              <Step 
                icon={faCalendarAlt}
                number="2"
                text="Arrange a date"
              />
              <div className="step-text">
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou
                </p>
              </div>  
            </> 
          }
        </AboutCenter>
      </Section>
      <Section>
        <AboutCenter>
          <Step 
            icon={faUtensils}
            number="3"
            text="I cook, you enjoy"
          />
          <div className="step-text">
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou
            </p>
          </div>
        </AboutCenter>
      </Section>
    </>
  );
};

export default HowItWorks;