import React from 'react';
import styles from './PageHeader.module.css';

const PageHeader = props => {
  const { title } = props;
  return <div className={styles.Title}>{title}</div>;
};

export default PageHeader;
