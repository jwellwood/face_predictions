import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';
import Logo from '../Logo/Logo';
import NavButton from './NavButton';

const Navigation = props => {
  return (
    <Navbar color="faded">
      <NavbarBrand className="brand">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </NavbarBrand>
      <Nav>
        <NavButton link="/detect" text="Detect" />
        <NavButton link="/examples" text="Examples" />
        <NavButton link="/about" text="About" />
      </Nav>
    </Navbar>
  );
};

export default Navigation;
