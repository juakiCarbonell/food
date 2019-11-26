import styled from "styled-components";
import Section from '../Section';
import {setColor} from '../styles';
import TestimonialItem from './TestimonialItem'


import React from 'react';

const TestimonialCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  text-align: center;
  .testimonial-quotes {
    margin-bottom: 1rem;
    img {
      width: 10%;
      display: block;
      margin: 0 auto;
    }
  }
  .testimonial-img {
    margin-bottom: 1rem;
    img {
      width: 50%;
      display: block;
      border-radius: 50%;
      margin: 0 auto;
    }
  }
  .testimonial-text {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
    .qoute {
      font-weight: bold;
      font-size: 1rem;
      margin-bottom: 0px;
    }
  }
  .testimonial-info {
    .name {
      margin-bottom: 0px;
    }
  }
`

const Testimonial = () => {
  return (
    <Section color={setColor.grey}>
      <TestimonialCenter>
        <TestimonialItem />      
      </TestimonialCenter>
      
    </Section>
  );
};

export default Testimonial;