import React, { Component } from 'react';
import Clarifai from 'clarifai';
import PageContainer from '../hoc/PageContainer';
import DisplayContainer from '../DisplayInfo/DisplayContainer';
import PageHeader from '../ui/Title/PageHeader';

const app = new Clarifai.App({ apiKey: process.env.REACT_APP_API_KEY });
class App extends Component {
  state = {
    input: '',
    imageUrl: '',
    info: [],
    box: {},
    error: false,
  };

  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  calculateData = data => {
    const dataPath = data.outputs[0].data.regions[0].data.face;
    const age = dataPath.age_appearance.concepts;
    const gender = dataPath.gender_appearance.concepts;
    const multiculture = dataPath.multicultural_appearance.concepts;
    return {
      age,
      gender,
      multiculture,
    };
  };

  displayAgeBox = info => {
    this.setState({ info: info });
  };

  displayFaceBox = box => {
    this.setState({ box: box });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onReset = () => {
    this.setState({
      imageUrl: '',
      input: '',
      info: [],
      box: {},
      error: false,
    });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
      .then(res => {
        this.displayFaceBox(this.calculateFaceLocation(res));
        this.displayAgeBox(this.calculateData(res));
      })
      .catch(() => this.setState({ error: true }));
  };

  render() {
    const { box, info, imageUrl, error } = this.state;
    return (
      <PageContainer>
        <PageHeader title="Detect" />
        <DisplayContainer
          box={box}
          info={info}
          imageUrl={imageUrl}
          onInputChange={this.onInputChange}
          onButtonClick={this.onSubmit}
          onReset={this.onReset}
          error={error}
        />
      </PageContainer>
    );
  }
}

export default App;
