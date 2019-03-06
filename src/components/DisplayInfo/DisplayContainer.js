import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import Photo from './Photo';
import Demographics from './Demographics';
import styles from './styles/DisplayContainer.module.css';

const DisplayContainer = props => {
  const { imageUrl, box, onFaceClick, info } = props;

  const listItems = [
    <Photo imageUrl={imageUrl} box={box} onFaceClick={onFaceClick} />,
    <Demographics info={info} />,
  ];

  return (
    <Jumbotron className={styles.Jumbotron}>
      <Row>
        {listItems.map(item => (
          <Col
            key={Math.random()}
            xs="12"
            sm="12"
            md="6"
            style={{ padding: '3px' }}
          >
            {item}
          </Col>
        ))}
      </Row>
    </Jumbotron>
  );
};

export default DisplayContainer;
