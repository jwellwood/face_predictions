import React from 'react';
import { Jumbotron, Fade } from 'reactstrap';
import styles from '../../../assets/styles/DisplayInfo.module.css';

const Placeholder = props => {
  const { type, text, icon } = props;
  let mainStyle = styles.DemoText;
  if (type === 'photo') {
    mainStyle = styles.PhotoImage;
  }
  return (
    <div>
      <Jumbotron className={mainStyle}>
        <Fade in={icon && text ? true : false} timeout={400}>
          <div style={{ fontSize: '1.5rem' }}>{icon}</div>
          <div>{text}</div>
        </Fade>
      </Jumbotron>
    </div>
  );
};

export default Placeholder;
