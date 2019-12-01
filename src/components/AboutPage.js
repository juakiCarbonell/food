import React from 'react';
import Section from '../UI/Section';
import styled from "styled-components";
import AboutImage from '../multimedia/images/chef.jpg';
import Title from '../UI/Title';


const AboutCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  .about-info,
  .about-img {
    padding: 1.5rem;
  }
  .about-img {
    img {
      width: 100%;
      display: block;
    }
  }
  .about-info {
    p {
      letter-spacing: 3px;
    }
  }

  /* @media (min-width: 990px){
    .about-section {
      display: flex;
    }
  } */

  @media (min-width: 1200px){
    max-width: 1170px;
    width: 100vw;
    .about-info,
    .about-img {
      padding: 0rem;
    }
    .about-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
    }
    .about-img,
    .about-info {
      align-self: center;
    }
    .about-info {
      p {
        width: 80%;
      }
    }
  }
`


const AboutPage = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-section">
          <div className="about-img">
            <img src={AboutImage} alt="Sobre mi"/>
          </div>
          <div className="about-info">
            <Title title="About Me" center></Title>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nulla, nisi officiis delectus voluptatum inventore ab sapiente architecto magni aperiam ut dicta vero qui similique ea harum aliquam recusandae neque.
            </p>
        </div>
      </div>

      {/*<div className="about-section">
        <div className="about-info">
          <Title title="About Me" center></Title>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nulla, nisi officiis delectus voluptatum inventore ab sapiente architecto magni aperiam ut dicta vero qui similique ea harum aliquam recusandae neque.
            </p>
          </div>
          <div className="about-img">
            <img src={AboutImage} alt="Sobre mi"/>
          </div>
        </div>

        <div className="about-section">
          <div className="about-img">
            <img src={AboutImage} alt="Sobre mi"/>
          </div>
          <div className="about-info">
            <Title title="About Me" center></Title>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nulla, nisi officiis delectus voluptatum inventore ab sapiente architecto magni aperiam ut dicta vero qui similique ea harum aliquam recusandae neque.
            </p>
          </div>
  </div>*/}
        
      </AboutCenter>
    </Section>
  );
};

export default AboutPage;