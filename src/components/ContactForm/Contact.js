import React from "react";

import Section from "../../UI/Section";
import Title from "../../UI/Title";
import PrimaryBtn from "../../UI/Buttons";
import { setColor } from "../../UI/styles";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = ({ contactPage }) => {
  return (
    <Section color={contactPage ? setColor.grey : setColor.white}>
      <Title title="Contact me" center />
      <ContactInfo />
      <ContactForm />
      <PrimaryBtn type="submit">Submit</PrimaryBtn>
    </Section>
  );
};

export default Contact;
