import React from 'react';
import quotation from '../../multimedia/images/comillas-png.png';
import styled from "styled-components";

const StyledTestimonial = styled.div`
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

const TestimonialItem = ({img, name, location, text}) => {
  return (
    <StyledTestimonial>
      <div className="testimonial-quotes">
        <img src={quotation} alt="quotes"/>
      </div>
      <div className="testimonial-text">
        <p className="qoute">{text}</p>
      </div>
    
      <div className="testimonial-img">
        <img src={img} alt="Testimonial"/>
      </div>
      <div className="testimonial-info">
        <p className="name">{name},</p>
        <p>{location}</p>
      </div>
    </StyledTestimonial>
  );
};

export default TestimonialItem;