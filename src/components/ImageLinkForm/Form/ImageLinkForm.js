import React from 'react';
import '../../../assets/styles/ImageLinkForm.css';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

const ImageLinkForm = props => {
  const { onInputChange, onButtonClick, onResetClick } = props;
  return (
    <div>
      <InputGroup style={{ marginBottom: '0.5rem' }}>
        <Input placeholder="paste image url here" onChange={onInputChange} />
        <InputGroupAddon addonType="append">
          <Button onClick={onButtonClick}>Detect</Button>
        </InputGroupAddon>
        <InputGroupAddon addonType="append">
          <Button onClick={onResetClick} size="sm" color="danger">
            <i className="fas fa-times" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default ImageLinkForm;
