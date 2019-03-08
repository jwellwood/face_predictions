import React from 'react';
import Tilt from 'react-tilt';
import logo from '../../../assets/images/logo.png';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Tilt className={styles.Tilt} options={{ max: 50 }}>
      <img src={logo} alt="logo" />
    </Tilt>
  );
};

export default Logo;
