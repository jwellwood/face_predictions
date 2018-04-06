import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Logo from "../Logo/Logo";
import "./Navbar.css";

const Navigation = ({ onRouteChange }) => {
  return (
    <div>
      <Navbar className="navbar">
        <NavbarBrand className='brand' onClick={() => onRouteChange("/")}>
          <Logo />
        </NavbarBrand>
        <Nav>
          <NavItem className="navitem">
            <NavLink onClick={() => onRouteChange("/about")}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/jwellwood/face_predictions">
              <i className="fab fa-github" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
