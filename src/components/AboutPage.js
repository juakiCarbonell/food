import React from 'react';
import Section from '../UI/Section';
import styled from "styled-components";
import aboutImage from '../multimedia/images/chef.jpg';
import cookingImage from '../multimedia/images/about_cooking.jpg';
import ingredientsImage from '../multimedia/images/about_ingredients.jpg';
import ImageContainer from '../UI/About/AboutImageContainer';
import TextContainer from '../UI/About/AboutTextContainer';
import { useMediaQuery } from 'react-responsive';

const AboutCenter = styled.div`
  width: 90vw;
  margin: 6rem auto 0;
  .about-section {
    /* padding: 1rem;
    margin: 2rem; */
    margin-bottom: 3rem;
  }

  
  @media (min-width: 1200px){
    margin-top: 6rem;
    max-width: 1170px;
    width: 100vw;
    .about-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
    }
  }
`


const AboutPage = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })

  return (
    <Section>
      <AboutCenter>
        <div className="about-section">
        {isDesktopOrLaptop ? 
          <>
            <ImageContainer img={aboutImage } />
            <TextContainer 
              title="About Me"
              text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nulla, nisi officiis delectus voluptatum inventore ab sapiente architecto magni aperiam ut dicta vero qui similique ea harum aliquam recusandae neque."
            />
          </>
          :
          <>
            <TextContainer 
              title="About Me"
              text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nulla, nisi officiis delectus voluptatum inventore ab sapiente architecto magni aperiam ut dicta vero qui similique ea harum aliquam recusandae neque."
            />
            <ImageContainer img={aboutImage } />
          </>
        
        }
          
        </div>
        <div className="about-section">
          {isDesktopOrLaptop ?
            <>
              <TextContainer 
              title="My way of cooking"
              text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nulla, nisi officiis delectus voluptatum inventore ab sapiente architecto magni aperiam ut dicta vero qui similique ea harum aliquam recusandae neque."
              />
              <ImageContainer img={cookingImage} />
            </>
            :
            <>
              <TextContainer 
              title="My way of cooking"
              text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nulla, nisi officiis delectus voluptatum inventore ab sapiente architecto magni aperiam ut dicta vero qui similique ea harum aliquam recusandae neque."
              />
              <ImageContainer img={cookingImage} />
            </>
          }
          


        </div>
        <div className="about-section">
        {isDesktopOrLaptop ? 
          <>
            <ImageContainer img={ingredientsImage} />
            <TextContainer 
              title="The products I use"
              text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nulla, nisi officiis delectus voluptatum inventore ab sapiente architecto magni aperiam ut dicta vero qui similique ea harum aliquam recusandae neque."
            />
          </>
          :
          <>
            <TextContainer 
              title="The products I use"
              text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nulla, nisi officiis delectus voluptatum inventore ab sapiente architecto magni aperiam ut dicta vero qui similique ea harum aliquam recusandae neque."
            />
            <ImageContainer img={ingredientsImage} />
          </>
        }
          
        </div>
        
      </AboutCenter>
    </Section>
  );
};

export default AboutPage;