import React from 'react';
import './ImageLinkForm.css';
import { Jumbotron } from 'reactstrap';

const ImageLinkForm = ({ onInputChange, onButtonClick, onResetClick }) => {
  return (
    <div>
      <Jumbotron className="jumbotron">
        <input
          className="inputField"
          id="urlInputForm"
          placeholder="paste image url here"
          onChange={onInputChange}
        />
        <hr />
        <ul>
          <li>1. Right click on an image and select 'copy image address'</li>
          <li>2. Paste your image address above</li>
          <li>3. Click 'detect'</li>
          <li>4. Click on the blue box to get demographic information</li>
        </ul>
        <hr />
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
