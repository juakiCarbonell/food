import React from 'react';

import {setColor} from "../styles";
import styled from "styled-components";



const FormCentered = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  .input-form{
    padding: 0.75rem 0;
    input,
    textarea {
      display: block;
      width: 100%;
      padding: 12px;
    }
    label {
      padding-left: 12px;
      padding-bottom: 5px;
    }
    input {
      border: 1px solid ${setColor.black};
      
    }
    textarea {
      border: 1px solid ${setColor.black};
      height: 150px;
    }
  }

`

const handleSubmit = (e) => {
  e.preventDefault()
}


const ContactForm = () => {
  return (
      <form onSubmit={handleSubmit}>
        <FormCentered>

          <div className="input-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
      
          <div className="input-form">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Your Email"/>
          </div>

          <div className="input-form">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message"></textarea>
          </div>

        </FormCentered>
      </form>
  );
};

export default ContactForm;