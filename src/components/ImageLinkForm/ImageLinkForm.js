import React from "react";
import "./ImageLinkForm.css";
import { Jumbotron } from "reactstrap";

const ImageLinkForm = ({ onInputChange, onButtonClick, onResetClick }) => {
  return (
    <div>
      <h1>Face Predictor</h1>
      <Jumbotron className="jumbotron">
        <input
          className="inputField"
          id="urlInputForm"
          placeholder="paste image url here"
          onChange={onInputChange}
        />
        <p>
          <i className="fas fa-exclamation-circle" /> Make sure that you copy
          the image address, not just the image
        </p>
        <button className="detectButton" onClick={onButtonClick}>
          Detect
        </button>
        <button className="resetButton" onClick={onResetClick}>
          Reset
        </button>
      </Jumbotron>
    </div>
  );
};

export default ImageLinkForm;
