import React from 'react';
import '../../../assets/styles/ImageLinkForm.css';
import { InputGroup, InputGroupAddon, Input, Button, Alert } from 'reactstrap';

const ImageLinkForm = props => {
  const { onInputChange, onButtonClick, onReset } = props;
  return (
    <div>
      <InputGroup style={{ marginBottom: '0.5rem' }}>
        <Input
          id="input"
          placeholder="paste image url here"
          onChange={onInputChange}
        />
        <InputGroupAddon addonType="append">
          <Button onClick={onButtonClick} color="primary">
            Detect
          </Button>
        </InputGroupAddon>
        <InputGroupAddon addonType="append">
          <Button onClick={onReset} size="sm" color="warning">
            <i className="fas fa-times" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default ImageLinkForm;
