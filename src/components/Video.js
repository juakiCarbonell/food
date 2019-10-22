import React from 'react';
import video from '../multimedia/videos/cooking.mp4';
import { Box } from 'reflexbox';
import styled from "styled-components";
import { space } from 'styled-system';

const StyledVideo = styled(Box)`
  ${space}
`

const Video = (props) => {
  return (
    <StyledVideo {...props}>
      <video loop autoPlay muted style={{ width: '100%' }}>
        <source src={video} type="video/mp4" />
      </video>
    </StyledVideo>
    
  );
  }

export default Video;