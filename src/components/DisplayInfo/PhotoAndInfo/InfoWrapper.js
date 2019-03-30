import React from 'react';
import { Collapse } from 'reactstrap';

const InfoWrapper = props => {
  const { open } = props;

  return (
    <div>
      <Collapse isOpen={open}>Info</Collapse>
    </div>
  );
};

export default InfoWrapper;
