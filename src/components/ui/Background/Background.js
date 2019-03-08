import React from 'react';
import Particles from 'react-particles-js';
import styles from './Background.module.css';

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
    move: {
      speed: 1,
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
      <Particles className={styles.Background} params={particlesOptions} />
    </div>
  );
};

export default Background;
