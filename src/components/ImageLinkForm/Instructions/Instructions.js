import React, { Component } from 'react';

import { Collapse, Button } from 'reactstrap';
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
      <div style={{ margin: '5px auto', textAlign: 'left' }}>
        <Button
          color="warning"
          onClick={this.toggle}
          style={{ marginBottom: '0.5rem' }}
          size="sm"
        >
          Toggle Instructions
        </Button>
        <Collapse isOpen={collapse}>
          <InstructionsList />
        </Collapse>
      </div>
    );
  }
}

export default Instructions;
