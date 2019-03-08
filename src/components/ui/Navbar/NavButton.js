import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import styles from './Navbar.module.css';

const NavButton = props => {
  const { text, link } = props;
  return (
    <NavLink to={link} className={styles.NavLink}>
      <Button size="sm" className={styles.NavButton}>
        {text}
      </Button>
    </NavLink>
  );
};

export default NavButton;
