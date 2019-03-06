import React from 'react';
import '../../../assets/styles/ImageLinkForm.css';
import { InputGroup, InputGroupAddon, Input, Button, Alert } from 'reactstrap';

const ImageLinkForm = props => {
  const { onInputChange, onButtonClick, onReset } = props;
  return (
    <div>
      <InputGroup style={{ marginBottom: '0.5rem' }}>
        <Input placeholder="paste image url here" onChange={onInputChange} />
        <InputGroupAddon addonType="append">
          <Button onClick={onButtonClick}>Detect</Button>
        </InputGroupAddon>
        <InputGroupAddon addonType="append">
          <Button onClick={onReset} size="sm" color="danger">
            <i className="fas fa-times" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <Alert color="info">
        <i className="fas fa-exclamation-circle" /> Make sure that you copy the
        <strong> image address</strong>, not just the image
      </Alert>
    </div>
  );
};

export default ImageLinkForm;
