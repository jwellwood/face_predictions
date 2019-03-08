import React from 'react';
import { Alert } from 'reactstrap';

const ErrorMessage = props => {
  const { message } = props;
  return (
    <Alert color="danger" style={{ margin: '10px auto' }}>
      {message}
    </Alert>
  );
};

export default ErrorMessage;
