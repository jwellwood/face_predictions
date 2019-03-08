import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';
import InstructionsList from './InstructionsList';
import styles from '../../../assets/styles/Instructions.module.css';

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
          color={collapse ? 'danger' : 'info'}
          onClick={this.toggle}
          size="sm"
          className={styles.Button}
        >
          <i className="fas fa-question" />
        </Button>
        <Collapse isOpen={collapse}>
          <InstructionsList />
        </Collapse>
      </div>
    );
  }
}

export default Instructions;
