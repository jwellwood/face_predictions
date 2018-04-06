import React from 'react';
import { Jumbotron } from "reactstrap";

const About = () => {
  return (
    <div>
      <h4>Welcome to Face Predictor</h4>
      <Jumbotron>
      <h5>This app was made using the following:</h5>
      <ul>
        <li><i class="fab fa-react"></i> app: <a href='https://reactjs.org/'>React js</a></li>
        <li><i class="fas fa-smile"></i> face detection and demographics: <a href='https://www.clarifai.com'>Clarifai</a></li>
        <li><i class="fas fa-adjust"></i> background: <a href='https://www.npmjs.com/package/react-particles-jsreact-particles-js'>react-particles-js</a></li>
        <li><i class="fas fa-certificate"></i> logo: <a href='https://www.npmjs.com/package/react-tilt'>react-tilt</a></li>
        <li><i class="fas fa-paint-brush"></i> styles: <a href='https://reactstrap.github.io/'>reactstrap</a> / <a href='https://tachyons.io/'>tachyons</a></li>
        <li><i class="fab fa-font-awesome"></i> icons: <a href='https://fontawesome.com/'>font awesome</a></li>
      </ul>
      <hr/>
      <p>The app was inspired by a code-along project on Andrei Neagoie's 'Zero to Mastery' course on Udemy</p>
      <p>Code can be viewed by clicking on the <i className="fab fa-github" /> symbol</p>
      </Jumbotron>
      
      <h4>Enjoy!</h4>
    </div>
  )
}

export default About;