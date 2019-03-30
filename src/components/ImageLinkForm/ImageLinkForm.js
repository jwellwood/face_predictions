import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button, Form } from 'reactstrap';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';
import styles from '../../assets/styles/Form.module.css';

const ImageLinkForm = props => {
  const { onInputChange, onButtonClick, onReset, error } = props;
  return (
    <Form className={styles.Form}>
      <InputGroup className={styles.InputGroup}>
        <Input
          placeholder="paste image url here"
          onChange={onInputChange}
          className={styles.Input}
        />

        <InputGroupAddon addonType="append">
          <Button
            className={styles.MainBtn}
            onClick={onButtonClick}
            color="primary"
            size="sm"
          >
            Detect
          </Button>
        </InputGroupAddon>
        <InputGroupAddon addonType="append">
          <Button
            type="reset"
            onClick={onReset}
            color="warning"
            className={styles.ResetBtn}
          >
            <i className="fas fa-undo-alt" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
      {error ? <ErrorMessage message="Please enter a valid url" /> : null}
    </Form>
  );
};

export default ImageLinkForm;
