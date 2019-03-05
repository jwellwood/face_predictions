import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

const NavButton = props => {
  const { text, link } = props;
  return (
    <div>
      <NavLink to={link}>
        <Button color="primary" size="sm">
          {text}
        </Button>
      </NavLink>
    </div>
  );
};

export default NavButton;
