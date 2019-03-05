import React from "react";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    shape: {
      type: "circle",
      stroke: {
        width: 3,
        color: "#be8a0e"
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    }
  }
};

const Background = () => {
  return (
    <div>
      <Particles className="particles" params={particlesOptions} />
    </div>
  );
};

export default Background;
