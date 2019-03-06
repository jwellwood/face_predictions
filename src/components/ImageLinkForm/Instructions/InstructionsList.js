import React from 'react';
import { ListGroup, ListGroupItem, Card } from 'reactstrap';

const InstructionsList = () => {
  return (
    <Card>
      <ListGroup>
        <ListGroupItem>
          Right click on an image and select 'copy image address'
        </ListGroupItem>
        <ListGroupItem>Paste your image address above</ListGroupItem>
        <ListGroupItem>Click 'detect'</ListGroupItem>
        <ListGroupItem>
          Click on the blue box to get demographic information
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default InstructionsList;
