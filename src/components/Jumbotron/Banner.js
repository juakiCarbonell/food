import React from 'react';
import styled, {css, keyframes} from "styled-components";
import {setColor} from '../../UI/styles';

const fadeIn = (start, center, end) => {
  const animation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(${start});
  }
  50%{
    opacity: 0.5;
    transform: translateY(${center});
  }
  100%{
    opacity: 1;
    transform: translateY(${end});
  }
  `
  return css`animation:${animation} 3s ease-in-out`

}



const BannerWrapper = styled.div`
  background: rgba(0,0,0,0.7);
  text-align: center;
  color: ${setColor.white};
  padding: 30px 32px;
  letter-spacing: 3px;
  border: 2px solid ${setColor.white};
  h1{
    text-transform: capitalize;
    font-size: 48px;
    ${fadeIn('100%', '-10%', '0%')}
  }
  p{
    width: 85%;
    margin: 0 auto;
    ${fadeIn('-100%', '10%', '0%')}
  }
`

const Banner = ({title, text, children}) => {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      <div className="info">
        <p>{text}</p>
      </div>
      {children}
    </BannerWrapper>
  );
};

export default Banner;