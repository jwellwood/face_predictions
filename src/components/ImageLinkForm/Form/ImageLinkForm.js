import React from 'react';
import '../../../assets/styles/ImageLinkForm.css';
import { InputGroup, InputGroupAddon, Input, Button, Form } from 'reactstrap';
import ErrorMessage from '../../ui/ErrorMessage';
import styles from './Form.module.css';

const ImageLinkForm = props => {
  const { onInputChange, onButtonClick, onReset, error } = props;
  return (
    <Form>
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
          <Button type="reset" onClick={onReset} color="warning">
            <i className="fas fa-undo-alt" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
      {error ? <ErrorMessage message="Please enter a valid url" /> : null}
    </Form>
  );
};

export default ImageLinkForm;
