import React from 'react';
import Title from './Title';
import Section from './Section';
import ContactInfo from './ContactForm/ContactInfo';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faTwitter, faFlickr, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';


const StyledIcons = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
  width: 66%;
  margin: 2rem auto;
`

const Follow = () => {
  return (
    <Section>
      <Title title="Follow Me" center />
      <StyledIcons>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebookSquare} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFlickr} />
      </StyledIcons>
      <ContactInfo />

    </Section>
  );
};

export default Follow;