import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, Button } from 'reactstrap';
import Logo from '../Logo/Logo';
import './Navbar.css';
import NavButton from './NavButton';

const Navigation = ({ onRouteChange }) => {
  return (
    <div>
      <Navbar className="navbar">
        <NavbarBrand className="brand">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </NavbarBrand>

        <NavButton link="/about" text="About" />
        <Button
          size="sm"
          color="primary"
          href="https://github.com/jwellwood/face_predictions"
        >
          <i className="fab fa-github" />
        </Button>
      </Navbar>
    </div>
  );
};

export default Navigation;
