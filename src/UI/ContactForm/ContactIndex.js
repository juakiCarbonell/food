import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Section from '../Section';
import styled from "styled-components";
import Title from "../Title";
import PrimaryBtn from '../Buttons'

const Contact = styled.div`
  width: 90vw;
  margin: 0 auto;
  @media (min-width: 768px){
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    .contact-info {
      align-self: center;
    }
  }

`

const ButtonContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`

const ContactIndex = () => {
  return (
    <Section >
      <Title title="Contact me" center />
      <Contact>
        <ContactForm />
        <div className="contact-info">
          <ContactInfo />
        </div>
      </Contact>
      <ButtonContainer>
        <PrimaryBtn type="submit">Submit</PrimaryBtn>
      </ButtonContainer>
    </Section>
  );
};

export default ContactIndex;