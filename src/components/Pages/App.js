import React, { Component } from 'react';
import ImageLinkForm from '../ImageLinkForm/Form/ImageLinkForm';
import Clarifai from 'clarifai';
import '../../assets/styles/App.css';
import Instructions from '../ImageLinkForm/Instructions/Instructions';
import PageContainer from '../hoc/PageContainer';
import DisplayContainer from '../DisplayInfo/DisplayContainer';
import PageHeader from '../ui/Title/PageHeader';

const app = new Clarifai.App({ apiKey: process.env.REACT_APP_API_KEY });
const baseURL =
  'https://twistedsifter.files.wordpress.com/2018/02/photoshopping-trumps-face-onto-the-queens-36.jpg?w=640&h=435';

class App extends Component {
  state = {
    input: baseURL,
    imageUrl: baseURL,
    info: [],
    box: {},
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
    this.setState({ imageUrl: null, info: [], box: {}, input: '' });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
      .then(res => {
        this.displayFaceBox(this.calculateFaceLocation(res));
      })
      .catch(err => console.log('unable to work with API', err));
  };

  onFaceClick = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
      .then(res => this.displayAgeBox(this.calculateData(res)))
      .catch(err => console.log('unable to work with API', err));
  };

  render() {
    const { box, info, imageUrl } = this.state;
    return (
      <PageContainer>
        <PageHeader title="Detect" />
        <Instructions />
        <div className="App">
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonClick={this.onButtonSubmit}
            onReset={this.onReset}
          />

          <DisplayContainer
            box={box}
            info={info}
            imageUrl={imageUrl}
            onFaceClick={this.onFaceClick}
          />
        </div>
      </PageContainer>
    );
  }
}

export default App;
