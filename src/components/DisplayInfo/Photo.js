import React from 'react';
import styles from './Photo.module.css';

const Photo = props => {
  const { imageUrl, box, onFaceClick } = props;
  return (
    <div className={styles.Photo}>
      <img id="inputImage" src={imageUrl} alt="" />
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
