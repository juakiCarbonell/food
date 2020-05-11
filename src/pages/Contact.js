import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from "styled-components";

import Section from '../UI/Section';
import Title from '../UI/Title';
import {setColor} from "../UI/styles";

import FollowIcons from '../components/Follow/FollowIcons';
import ContactIndex from '../components/ContactForm/ContactIndex';
import Contact from '../components/ContactForm/Contact';

const AboutCenterTop = styled.div`
  width: 90vw;
  margin: 0 auto 2rem;
  .about-section {
    margin-bottom: 3rem;
  }

  
  @media (min-width: 1200px){
    /* margin-top: 5rem; */
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
    grid-template-columns: 1fr;
  }
`

const ContactPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })


  return (
    <>
      <AboutCenterTop>
        { isDesktopOrLaptop ? <ContactIndex/> : <Contact/>}
      </AboutCenterTop>
      <Section color= {setColor.grey}>
        <AboutCenter>
          <Title title="Follow Me" center />
          <FollowIcons />
        </AboutCenter>
      </Section>
    </>

  );
};

export default ContactPage;