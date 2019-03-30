import React from 'react';
import styles from './PageHeader.module.css';
import { Fade } from 'reactstrap';

const PageHeader = props => {
  const { title } = props;
  return (
    <Fade timeout={450}>
      <div className={styles.Title}>{title}</div>
    </Fade>
  );
};

export default PageHeader;
