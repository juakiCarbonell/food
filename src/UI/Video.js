import React from 'react';
import video from '../multimedia/videos/cooking.mp4';
import styled from "styled-components";


const StyledVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100vh;
`


const Video = () => {
  return (
    <StyledVideo loop autoPlay muted>
      <source src={video} type="video/mp4" />
    </StyledVideo>
  );
};

export default Video;