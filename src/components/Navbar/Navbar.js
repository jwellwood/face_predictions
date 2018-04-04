import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Logo from "../Logo/Logo";
import "./Navbar.css";

const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar">
        <NavbarBrand href="/" className="mr-auto">
          <Logo />
        </NavbarBrand>
        <Nav>
          <NavItem className="navitem">
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/jwellwood">
              <i className="fab fa-github" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
