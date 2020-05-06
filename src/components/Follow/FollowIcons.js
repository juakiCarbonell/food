import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faTwitter, faFlickr, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import styled from "styled-components";

const StyledIcons = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
  width: 66%;
  margin: 2rem auto;
`


const FollowIcons = () => {
  return (
    <StyledIcons>
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faFlickr} />
    </StyledIcons>
  );
};

export default FollowIcons;