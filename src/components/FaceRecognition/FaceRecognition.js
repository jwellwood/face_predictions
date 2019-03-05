import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box, onFaceClick, info }) => {
  return (
    <div>
      <hr />
      <div className="photo">
        <img id="inputImage" src={imageUrl} alt="" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
          onClick={onFaceClick}
        />
      </div>
      <hr />
      <div className="demoInfo">
        <h4>Demographics</h4>
        <ul>
        <hr />
          <li>
            Age: <span> {info[0]}</span>
          </li>
          <p>{info[1]}%</p>
          <hr />
          <li>
            Gender: <span> {info[2]}</span>
          </li>
          <p>{info[3]}%</p>
          <hr />
          <li>
            Multicultural Profile: <span>{info[4]}</span>
          </li>
          <p>{info[5]}%</p>
          <div className="secondaryInfo">
            <li>
              <span>{info[6]}</span>
            </li>
            <p>{info[7]}%</p>
            <li>
              <span>{info[8]}</span>
            </li>
            <p>{info[9]}%</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default FaceRecognition;
