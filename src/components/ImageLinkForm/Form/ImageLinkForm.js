import React from 'react';
import '../../../assets/styles/ImageLinkForm.css';
import { Jumbotron } from 'reactstrap';
import Instructions from '../Instructions/Instructions';

const ImageLinkForm = ({ onInputChange, onButtonClick, onResetClick }) => {
  return (
    <div>
      <input
        className="inputField"
        id="urlInputForm"
        placeholder="paste image url here"
        onChange={onInputChange}
      />
      <button className="detectButton" onClick={onButtonClick}>
        Detect
      </button>
      <button className="resetButton" onClick={onResetClick}>
        Reset
      </button>
    </div>
  );
};

export default ImageLinkForm;
