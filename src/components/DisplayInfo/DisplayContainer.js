import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Photo from '../FaceRecognition/Photo';
import Demographics from '../FaceRecognition/Demographics';

const DisplayContainer = props => {
  const { imageUrl, box, onFaceClick, info } = props;
  return (
    <Container style={{ border: '1px solid red' }}>
      <Row>
        <Col xs="12" sm="6" md="6" style={{ border: '1px solid yellow' }}>
          <Photo imageUrl={imageUrl} box={box} onFaceClick={onFaceClick} />
        </Col>
        <Col xs="12" sm="6" md="6" style={{ border: '1px solid pink' }}>
          <Demographics info={info} />
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayContainer;
