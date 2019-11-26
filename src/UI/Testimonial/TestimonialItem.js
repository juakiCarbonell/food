import React from 'react';
import imgTestimonial from '../../multimedia/images/testimonial.png';
import quotation from '../../multimedia/images/comillas-png.png';

const TestimonialItem = () => {
  return (
    <div>
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
    </div>
  );
};

export default TestimonialItem;