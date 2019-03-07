import React from 'react';
import { Alert } from 'reactstrap';

const ErrorMessage = props => {
  const { message } = props;
  return <Alert color="danger">{message}</Alert>;
};

export default ErrorMessage;
