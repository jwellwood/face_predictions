import React from 'react';
import { Jumbotron } from 'reactstrap';
import styles from '../styles/PhotoPlaceholder.module.css';

const Placeholder = props => {
  const { type, text } = props;
  let mainStyle = styles.DemoText;
  if (type === 'photo') {
    mainStyle = styles.PhotoImage;
  }
  return (
    <div>
      <Jumbotron className={mainStyle}>
        <div>{text}</div>
      </Jumbotron>
    </div>
  );
};

export default Placeholder;
