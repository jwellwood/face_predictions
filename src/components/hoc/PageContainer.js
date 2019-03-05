import React from 'react';
import { Container, Col } from 'reactstrap';

const PageContainer = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default PageContainer;
