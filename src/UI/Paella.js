import React from 'react';
import {SmallBtn} from './Buttons';
import styled from "styled-components";
import {setColor, setFont, setTransition, setShadow} from "./styles";
import PropsTypes from 'prop-types';

const StyledPaella = styled.article`
  background: ${setColor.white};
  margin: 2rem 0;
  .img-container {
    background: ${setColor.black};
    position: relative;
    img {
      width: 100%;
      display: block;
      ${setTransition};
    }
    &:hover img{
      opacity: 0.5;
    }
    .price {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.white};
      letter-spacing: 5px;
      font-size: 1.5rem;
      padding: 0.75rem 2rem;
      border: 2px solid ${setColor.white};
      opacity: 0;
      ${setTransition};
    }
    &:hover .price {
      opacity: 1;
    }
  }
  .paella-info {
    letter-spacing: 2px;
    padding: 1rem;
    h4 {
      text-transform: capitalize;
    }
  }
  ${setShadow.light}
  ${setTransition}
  &:hover {
    ${setShadow.dark}
  }
`

const Paella = ({paella}) => {
  const {img='', title='', info='', price=0} = paella;
  return (
    <StyledPaella >
      <div className="img-container">
        <img src={img} alt="Paella"/>
        <div className="price">{price}$</div>
      </div>
      <div className="paella-info">
        <h4>{title}</h4>
        <p>{info}</p>
        <SmallBtn>Hello</SmallBtn>
      </div>
    </StyledPaella >
  );
};

export default Paella;

Paella.propTypes = {
  paella: PropsTypes.shape({
    img: PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
    info: PropsTypes.string.isRequired,
    price: PropsTypes.number.isRequired
  })
};