import React from 'react';
import Title from './Title';
import Section from './Section';
import ContactInfo from './ContactForm/ContactInfo';
import {setColor} from "./styles";
import FollowIcons from './FollowIcons'


const Follow = ({showPhone, contactPage}) => {
  return (
    <Section color={ contactPage ? setColor.grey: setColor.white}>
      <Title title="Follow Me" center />
      <FollowIcons />
      {showPhone ?
        <ContactInfo />
      :
        null
      }
      

    </Section>
  );
};

export default Follow;