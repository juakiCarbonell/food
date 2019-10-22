import React from 'react';
import video from '../multimedia/videos/cooking.mp4'

const Video = () => {
  return (
    <video loop autoPlay muted>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Video;