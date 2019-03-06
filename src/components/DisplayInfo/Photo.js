import React from 'react';
import { Jumbotron } from 'reactstrap';
import styles from './Photo.module.css';
import PhotoPlaceholder from './PhotoPlaceholder';

const Photo = props => {
  const { imageUrl, box, onFaceClick } = props;
  return (
    <div className={styles.Photo}>
      {imageUrl ? (
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          style={{ borderRadius: '10px' }}
        />
      ) : (
        <PhotoPlaceholder />
      )}

      <div
        className={styles.BoundingBox}
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
        onClick={onFaceClick}
      />
    </div>
  );
};

export default Photo;
