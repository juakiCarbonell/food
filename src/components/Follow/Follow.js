import React from 'react';

import Title from '../../UI/Title';
import Section from '../../UI/Section';
import {setColor} from "../../UI/styles";

import ContactInfo from '../ContactForm/ContactInfo';
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