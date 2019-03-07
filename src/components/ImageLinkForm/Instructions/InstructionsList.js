import React from 'react';
import { ListGroup, ListGroupItem, Card } from 'reactstrap';

const InstructionsList = () => {
  return (
    <Card>
      <ListGroup>
        <ListGroupItem color="info">
          Right click on an image and select 'copy image address'
        </ListGroupItem>
        <ListGroupItem color="info">
          Paste your image address in the input field
        </ListGroupItem>
        <ListGroupItem color="info">Click 'detect'</ListGroupItem>
        <ListGroupItem color="success">
          <i className="fas fa-exclamation-circle" /> Make sure that you copy
          the
          <strong> image address</strong>, not just the image
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default InstructionsList;
