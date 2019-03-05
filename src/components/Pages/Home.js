import React from 'react';
import Title from '../ui/Title/Title';
import styles from './styles/Home.module.css';
const Home = props => {
  const {} = props;
  return (
    <div className={styles.Home}>
      <Title />
    </div>
  );
};

export default Home;
