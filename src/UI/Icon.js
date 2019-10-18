
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { Box } from 'reflexbox'




const Icon = () => {
  return (
    <Box>
      <FontAwesomeIcon icon={faHamburger} />
    </Box>  
  );
};

export default Icon;