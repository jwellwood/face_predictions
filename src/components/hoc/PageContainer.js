import React from 'react';
import { Container, Col } from 'reactstrap';

const PageContainer = props => {
  const { children } = props;
  return (
    <Container>
      <Col xs="12" sm="10" md="8">
        {children}
      </Col>
    </Container>
  );
};

export default PageContainer;
