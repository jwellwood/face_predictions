import React from 'react';
import styles from './styles/Photo.module.css';
import Placeholder from './Placeholders/Placeholder';

const Photo = props => {
  const { imageUrl, box, onFaceClick } = props;
  return (
    <div className={styles.Photo}>
      {imageUrl ? (
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          style={{ borderRadius: '5px' }}
        />
      ) : (
        <Placeholder type="photo" text="Your photo will appear here" />
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
