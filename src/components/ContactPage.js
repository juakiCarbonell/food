import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from "styled-components";
import Section from '../UI/Section';
import ContactIndex from '../UI/ContactForm/ContactIndex';
import Contact from '../UI/ContactForm/Contact';
import Follow from '../UI/Follow';
import Title from '../UI/Title';


const AboutCenterTop = styled.div`
  width: 90vw;
  margin: 2rem auto 2rem;
  .about-section {
    margin-bottom: 3rem;
  }

  
  @media (min-width: 1200px){
    margin-top: 2rem;
    max-width: 1170px;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`
const TitleContianer = styled.div`
  margin-top: 6rem;
`

const ContactPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })


  return (
    <Section>
      <AboutCenterTop>
        { isDesktopOrLaptop ? <ContactIndex /> : <Contact />}
        <Follow />
      </AboutCenterTop>
      
    </Section>
  );
};

export default ContactPage;