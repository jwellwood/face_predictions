import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import styles from './Navbar.module.css';

const NavButton = props => {
  const { text, link } = props;
  return (
    <NavLink to={link} className={styles.NavButton}>
      <Button color="info" size="sm">
        {text}
      </Button>
    </NavLink>
  );
};

export default NavButton;
