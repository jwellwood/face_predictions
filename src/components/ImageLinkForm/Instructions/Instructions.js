import React, { Component } from 'react';

import { Collapse, Button, Alert } from 'reactstrap';
import InstructionsList from './InstructionsList';

class Instructions extends Component {
  state = { collapse: false };

  toggle = () => {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  };

  render() {
    const { collapse } = this.state;
    return (
      <div>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: '0.5rem' }}
        >
          Instructions
        </Button>
        <Collapse isOpen={collapse}>
          <InstructionsList />
        </Collapse>
        <Alert color="info">
          <i className="fas fa-exclamation-circle" /> Make sure that you copy
          the image address, not just the image
        </Alert>
      </div>
    );
  }
}

export default Instructions;
