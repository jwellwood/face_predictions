import React from 'react';
import Title from '../ui/Title/Title';
import HomeSlides from '../ui/Home/HomeSlides';
import styles from './styles/Home.module.css';
const Home = props => {
  return (
    <div className={styles.Home}>
      <Title />
      <HomeSlides />
    </div>
  );
};

export default Home;
