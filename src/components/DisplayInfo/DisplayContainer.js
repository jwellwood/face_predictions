import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import Photo from './PhotoAndInfo/Photo';
import Demographics from './PhotoAndInfo/Demographics';
import styles from '../../assets/styles/Layout.module.css';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import Instructions from '../ui/Instructions/Instructions';

const DisplayContainer = props => {
  const {
    imageUrl,
    box,
    onFaceClick,
    info,
    error,
    onInputChange,
    onButtonClick,
    onReset,
  } = props;

  const listItems = [
    <Photo
      imageUrl={imageUrl}
      box={box}
      onFaceClick={onFaceClick}
      error={error}
    />,

    <Demographics info={info} />,
  ];

  return (
    <div>
      <Instructions />
      <Jumbotron className={styles.Jumbotron}>
        <Col style={{ padding: '0px' }}>
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonClick={onButtonClick}
            onReset={onReset}
            error={error}
          />
        </Col>

        <Row>
          {listItems.map(item => (
            <Col key={Math.random()} xs="12" sm="12" md="6">
              {item}
            </Col>
          ))}
        </Row>
      </Jumbotron>
    </div>
  );
};

export default DisplayContainer;
