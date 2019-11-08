import React from 'react';
import styled from "styled-components";
import {useSpring, animated, interpolate} from 'react-spring';


const StyledBurgerMenu = styled.button`
  /* top: 5%;
  right: 0%; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  /* @media (min-width: 769px) {
    display: none;
  } */
`


const Lines = styled(animated.div)`
  width: 50px;
  height: 0.5rem;
  background-color: black;
  border-radius: 10px;
`

const BurgerMenu = (props) => {
  const {rot1, trans1} = useSpring({
    from: { rot1: props.open ? 0 : 45, trans1: props.open ? 0 : 10},
    rot1: props.open ? 45 : 0,
    trans1: props.open ? 10 : 0,
    config: { duration: 500 }
  })

  const {rot, trans} = useSpring({
    from: { rot: props.open ? 0 : -45, trans: props.open ? 0 : 15},
    rot: props.open ? -45 : 0,
    trans: props.open ? 15 : 0,
    config: { duration: 500 }
  })
  
  const { x2 } = useSpring({ from: { x2: props.open ? 1 : 0 }, x2: props.open ? 0 : 1, config: { duration: 500 } })
  
  return (
    
    <StyledBurgerMenu onClick={props.handleClick} {...props}>
      <Lines 
        style={{
          transform: interpolate([rot1, trans1], (rot1, trans1) => `rotate(${rot1}deg) translate(${trans1}px, ${trans1}px)`)
        }}
      
      />
      <Lines style={{
        opacity: x2.interpolate({ range: [0, 1], output: [0 ,1] })
      }}/>
      <Lines
        style={{
          transform: interpolate([rot, trans], (rot, trans) => `rotate(${rot}deg) translate(${trans}px, -${trans}px)`)
        }}

      />
    </StyledBurgerMenu>
    );
};

export default BurgerMenu;