import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'

import TestimonialItem from './TestimonialItem'

import Section from '../../UI/Section';
import { setColor } from '../../UI/styles';

import imgTestimonial from '../../multimedia/images/testimonial.png';



import React from 'react';

const TestimonialCenter = styled.div`
  display: flex;
  width: 90vw;
  margin: 0 auto;
  text-align: center;
  `

const Testimonial = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })



  return (
    <Section color={setColor.grey}>
      <TestimonialCenter>
        <TestimonialItem 
          img={imgTestimonial}
          text="ksdnfkdsjl dlsjfldksjfd dslfjdslk"
          name="Emma Johnson"
          location="Berlin"
        />  
        {isDesktopOrLaptop && <>    
          <TestimonialItem 
            img={imgTestimonial}
            text="ksdnfkdsjl dlsjfldksjfd dslfjdslk"
            name="Emma Johnson"
            location="Berlin"
          />      
          <TestimonialItem 
            img={imgTestimonial}
            text="ksdnfkdsjl dlsjfldksjfd dslfjdslk"
            name="Emma Johnson"
            location="Berlin"
          />
        </>}      
      </TestimonialCenter>
      
    </Section>
  );
};

export default Testimonial;