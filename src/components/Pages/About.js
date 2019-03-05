import React from 'react';
import { Jumbotron } from 'reactstrap';
import PageContainer from '../hoc/PageContainer';

const About = () => {
  return (
    <PageContainer>
      <h4>Welcome to Face Predictor</h4>
      <Jumbotron>
        <h5>This app was made using the following:</h5>
        <ul>
          <li>
            <i className="fab fa-react" /> app:{' '}
            <a href="https://reactjs.org/">React js</a>
          </li>
          <li>
            <i className="fas fa-smile" /> face detection and demographics:{' '}
            <a href="https://www.clarifai.com">Clarifai</a>
          </li>
          <li>
            <i className="fas fa-adjust" /> background:{' '}
            <a href="https://www.npmjs.com/package/react-particles-jsreact-particles-js">
              react-particles-js
            </a>
          </li>
          <li>
            <i className="fas fa-certificate" /> logo:{' '}
            <a href="https://www.npmjs.com/package/react-tilt">react-tilt</a>
          </li>
          <li>
            <i className="fas fa-paint-brush" /> styles:{' '}
            <a href="https://reactstrap.github.io/">reactstrap</a> /{' '}
            <a href="https://tachyons.io/">tachyons</a>
          </li>
          <li>
            <i className="fab fa-font-awesome" /> icons:{' '}
            <a href="https://fontawesome.com/">font awesome</a>
          </li>
        </ul>
        <hr />
        <p>
          The app was inspired by a code-along project on Andrei Neagoie's 'Zero
          to Mastery' course on Udemy
        </p>
        <p>
          Code can be viewed by clicking on the <i className="fab fa-github" />{' '}
          symbol
        </p>
      </Jumbotron>

      <h4>Enjoy!</h4>
    </PageContainer>
  );
};

export default About;
