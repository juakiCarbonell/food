import React from 'react';
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';

import aboutImage from '../multimedia/images/chef.jpg';
import cookingImage from '../multimedia/images/about_cooking.jpg';
import ingredientsImage from '../multimedia/images/about_ingredients.jpg';

import ImageContainer from '../components/About/AboutImageContainer';
import TextContainer from '../components/About/AboutTextContainer';

import Section from '../UI/Section';
import {setColor} from '../UI/styles';

const AboutCenterTop = styled.div`
  width: 90vw;
  margin: 6rem auto 2rem;
  .about-section {
    margin-bottom: 3rem;
  }

  
  @media (min-width: 1200px){
    margin-top: 6rem;
    max-width: 1170px;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`

const AboutCenter = styled(AboutCenterTop)`
  margin: 2rem auto;
  @media (min-width: 1200px){
    margin-top: 2rem;
  }
`


const AboutPage = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })

  return (
    <>
      <Section>
        <AboutCenterTop>
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
        </AboutCenterTop>
      </Section>
      <Section color={setColor.grey}>
        <AboutCenter>
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
        </AboutCenter>
      </Section>
      <Section>
        <AboutCenter>
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
        </AboutCenter>
      </Section>
    </>
  );
};

export default AboutPage;