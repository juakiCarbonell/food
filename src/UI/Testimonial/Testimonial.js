import styled from "styled-components";
import Section from '../Section';
import imgTestimonial from '../../multimedia/images/testimonial.png';
import quotation from '../../multimedia/images/quotation.png';


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
    <Section>
      <TestimonialCenter>
        <div className="testimonial-quotes">
          <img src={quotation} alt="quotes"/>
        </div>
        <div className="testimonial-text">
          <p className="qoute">There are many variations of passages of Lorem Ipsum available, but the majority</p>
        </div>
        
        <div className="testimonial-img">
          <img src={imgTestimonial} alt="Sobre mi"/>
        </div>
        <div className="testimonial-info">
          <p className="name">Emma Johnson,</p>
          <p>Berlin</p>
        </div>

      
      </TestimonialCenter>
      
    </Section>
  );
};

export default Testimonial;