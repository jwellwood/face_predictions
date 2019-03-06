import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

const NavButton = props => {
  const { text, link } = props;
  return (
    <NavLink to={link}>
      <Button color="secondary" size="sm">
        {text}
      </Button>
    </NavLink>
  );
};

export default NavButton;
