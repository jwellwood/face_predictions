import React from "react";
import "./FaceRecognition.css";
import { Jumbotron } from "reactstrap";

const FaceRecognition = ({ imageUrl, box, onFaceClick, info }) => {
  return (
    <div>
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

      <div className="demoInfo">
        <ul>
          <h4>Demographics</h4>
          <li>
            Age: <span> {info[0]}</span>
          </li>
          <p>{info[1]}%</p>
          <li>
            Gender: <span> {info[2]}</span>
          </li>
          <p>{info[3]}%</p>
          <li>
            Multicultural Profile: <span>{info[4]}</span>
          </li>
          <p>{info[5]}%</p>
        </ul>
      </div>
    </div>
  );
};

export default FaceRecognition;
