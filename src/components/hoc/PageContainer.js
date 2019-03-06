import React from 'react';
import { Container } from 'reactstrap';

const PageContainer = props => {
  const { children } = props;
  return <Container style={{ padding: '3px' }}>{children}</Container>;
};

export default PageContainer;
