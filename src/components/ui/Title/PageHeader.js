import React from 'react';
import styles from './PageHeader.module.css';

const PageHeader = props => {
  const { title } = props;
  return <div className={styles.title}>{title}</div>;
};

export default PageHeader;
