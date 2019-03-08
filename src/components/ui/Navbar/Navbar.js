import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'reactstrap';
import Logo from '../Logo/Logo';
import NavButton from './NavButton';
import styles from './Navbar.module.css';

const Navigation = props => {
  return (
    <Navbar color="link" className={styles.Navbar}>
      <NavLink to="/">
        <Logo />
      </NavLink>

      <Nav>
        <NavButton link="/detect" text="Detect" />
        <NavButton link="/examples" text="Examples" />
        <NavButton link="/about" text="About" />
      </Nav>
    </Navbar>
  );
};

export default Navigation;
