import React from 'react';

const Instructions = () => {
  return (
    <div>
      <ul>
        <li>1. Right click on an image and select 'copy image address'</li>
        <li>2. Paste your image address above</li>
        <li>3. Click 'detect'</li>
        <li>4. Click on the blue box to get demographic information</li>
      </ul>
      <hr />
      <p>
        <i className="fas fa-exclamation-circle" /> Make sure that you copy the
        image address, not just the image
      </p>
    </div>
  );
};

export default Instructions;
