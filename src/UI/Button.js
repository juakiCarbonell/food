import React from 'react';
import styled from "styled-components";
import { color, space, layout, variant } from "styled-system";

const buttonVariant = variant({
  key: "buttons"
});


const StyledButton = styled.button`
  ${space}
  ${layout}
  ${color}
  ${buttonVariant}
  min-height: 22px;
  line-height: 22px;
  border:none;
  outline: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
`;

const Button = (props) => {
  const { children } = props;
  return (
    <StyledButton {...props}>

    </StyledButton>
  );
};

Button.propTypes = {
  ...color.propTypes,
  ...space.propTypes
};



export default Button;