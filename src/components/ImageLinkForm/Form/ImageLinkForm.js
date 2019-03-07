import React from 'react';
import '../../../assets/styles/ImageLinkForm.css';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import ErrorMessage from '../../ui/ErrorMessage';
import styles from './Form.module.css';

const ImageLinkForm = props => {
  const { onInputChange, onButtonClick, onReset, error } = props;
  return (
    <div>
      <InputGroup style={{ marginBottom: '0.5rem' }}>
        <Input placeholder="paste image url here" onChange={onInputChange} />
        <InputGroupAddon addonType="append">
          <Button
            className={styles.Btn}
            onClick={onButtonClick}
            color="primary"
            size="sm"
          >
            Detect
          </Button>
        </InputGroupAddon>
        <InputGroupAddon addonType="append">
          <Button onClick={onReset} size="sm" color="warning">
            <i className="fas fa-times" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
      {error ? <ErrorMessage message="Please enter a valid url" /> : null}
    </div>
  );
};

export default ImageLinkForm;
