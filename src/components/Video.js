import React from 'react';
import video from '../multimedia/videos/cooking.mp4';
import { Box } from 'reflexbox';
import styled from "styled-components";
import { space } from 'styled-system';
import img from '../multimedia/images/gate.jpeg';
import Image from '../UI/Image';

const StyledVideo = styled(Box)`
  ${space}
`
const StyledImage = styled(Box)`
  ${space}
`

const Video = (props) => {
  const isMobile = props.isMobile;
  if(!isMobile){
    return (
      <StyledVideo {...props}>
          <video loop autoPlay muted style={{ width: '100%' }}>
            <source src={video} type="video/mp4" />
          </video>
      </StyledVideo>
    );
  }
    
  return(
    <Image />
  );
}

export default Video;