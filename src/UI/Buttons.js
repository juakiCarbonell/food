
import styled from "styled-components";
import {setColor, setFont, setTransition} from "./styles"

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.darkRed};
  color: ${setColor.black};
  text-transform: capitalize;
  font-size: 18px;
  ${setFont.main};
  padding: 1rem;
  border: 1px solid ${setColor.black};
  letter-spacing: 2px;
  text-decoration: none;
  ${setTransition({time:"2s"})};
  cursor: pointer;
  ${props => 
    `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`
  }
  
  &:hover {
    background: transparent;
    /* color: ${setColor.white}; */
  }
`


export default PrimaryBtn;

export const SmallBtn = styled(PrimaryBtn)`
  padding: 0.5rem;
`