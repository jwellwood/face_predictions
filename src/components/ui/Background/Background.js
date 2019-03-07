import React from 'react';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 500,
      },
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 3,
        color: '#5DADE2',
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
    },
  },
};

const Background = () => {
  return (
    <div>
      <Particles className="particles" params={particlesOptions} />
    </div>
  );
};

export default Background;
