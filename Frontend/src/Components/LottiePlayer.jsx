// src/LottiePlayer.js
import React from 'react';

const LottiePlayer = () => {
  return (
    <dotlottie-player 
      src="https://lottie.host/6acb3d7f-047e-45a8-a621-7bc491c8688a/Odm0Zqw3tz.json" 
      background="transparent" 
      speed="1" 
      style={{ width: '500px', height: '500px' }} 
      loop 
      autoplay>
    </dotlottie-player>
  );
};

export default LottiePlayer;
