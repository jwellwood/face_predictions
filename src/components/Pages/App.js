import React, { Component } from 'react';
import ImageLinkForm from '../ImageLinkForm/Form/ImageLinkForm';
import Clarifai from 'clarifai';
import '../../assets/styles/App.css';
import Instructions from '../ImageLinkForm/Instructions/Instructions';
import PageContainer from '../hoc/PageContainer';
import DisplayContainer from '../DisplayInfo/DisplayContainer';
import PageHeader from '../ui/Title/PageHeader';

const app = new Clarifai.App({ apiKey: 'b687b3be89474539b5362b0c2f5f5dfc' });
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
    // get age
    const age = dataPath.age_appearance.concepts[0];
    const ageNumber = age.name;
    const ageProb = age.value * 100;
    const agePercent = ageProb.toFixed();
    // get gender
    const gender = dataPath.gender_appearance.concepts[0];
    const genderName = gender.name;
    const genderProb = gender.value * 100;
    const genderPercent = genderProb.toFixed();
    // Get multicultural appearance, top 3
    const multiculture = dataPath.multicultural_appearance.concepts[0];
    const multiculture2 = dataPath.multicultural_appearance.concepts[1];
    const multiculture3 = dataPath.multicultural_appearance.concepts[2];
    const multicultureName = multiculture.name;
    const multicultureName2 = multiculture2.name;
    const multicultureName3 = multiculture3.name;
    const multicultureProb = multiculture.value * 100;
    const multicultureProb2 = multiculture2.value * 100;
    const multicultureProb3 = multiculture3.value * 100;
    const multiculturePercent = multicultureProb.toFixed();
    const multiculturePercent2 = multicultureProb2.toFixed();
    const multiculturePercent3 = multicultureProb3.toFixed();
    return [
      ageNumber,
      agePercent,
      genderName,
      genderPercent,
      multicultureName,
      multiculturePercent,
      multicultureName2,
      multiculturePercent2,
      multicultureName3,
      multiculturePercent3,
    ];
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

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
      .then(res => {
        console.log(res);
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
        <div className="App">
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonClick={this.onButtonSubmit}
          />
          <DisplayContainer
            box={box}
            info={info}
            imageUrl={imageUrl}
            onFaceClick={this.onFaceClick}
          />
          <Instructions />
        </div>
      </PageContainer>
    );
  }
}

export default App;
