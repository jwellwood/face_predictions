import React from 'react';
import { Fade, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import classes from './Title.module.css';
const Title = () => {
  return (
    <div className={classes.Container}>
      <div>
        <Fade timeout={200}>
          <h6 className={classes.Subtitle}>the amazing</h6>
        </Fade>
        <div className={classes.SubContainer}>
          <Fade timeout={500}>
            <h2 className={classes.Face}>Face</h2>
          </Fade>
          <Fade timeout={800}>
            <h2 className={classes.Detector}>Detector</h2>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Title;
