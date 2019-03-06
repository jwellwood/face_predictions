import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import Photo from '../FaceRecognition/Photo';
import Demographics from '../FaceRecognition/Demographics';

const DisplayContainer = props => {
  const { imageUrl, box, onFaceClick, info } = props;
  return (
    <Jumbotron>
      <Row>
        <Col xs="12" sm="6" md="6" style={{ padding: '3px' }}>
          <Photo imageUrl={imageUrl} box={box} onFaceClick={onFaceClick} />
        </Col>
        <Col xs="12" sm="6" md="6" style={{ padding: '3px' }}>
          <Demographics info={info} />
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default DisplayContainer;