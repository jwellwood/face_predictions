import React from 'react';

const Photo = props => {
  const { imageUrl, box, onFaceClick } = props;
  return (
    <div className="photo">
      <img id="inputImage" src={imageUrl} alt="" />
      <div
        className="bounding-box"
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
