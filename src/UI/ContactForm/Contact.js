import React from 'react';
import ContactForm from './ContactForm'
import Section from '../Section';
import Title from '../Title';
import PrimaryBtn from '../Buttons';
import ContactInfo from './ContactInfo'
import {setColor} from "../styles";

const Contact = ({contactPage}) => {
  return (
    <Section color={ contactPage ? setColor.grey: setColor.white}>
      <Title title="Contact me" center />
      <ContactInfo />
      <ContactForm />
      <PrimaryBtn type="submit">Submit</PrimaryBtn>
      
    </Section>
  );
};

export default Contact;