import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 49px;
  height: 49px;
  cursor: pointer;
  border: 1px solid white
`

const Burger = (props) => {
  console.log(props)
  return (
    <Wrapper onClick={props.handleClick}>
      
    </Wrapper>
  );
};

export default Burger;