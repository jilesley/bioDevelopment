import React, { Component } from 'react';
import Details from './utilities/details/details';
import Preview from './utilities/preview/preview';
import Header from './utilities/header/header';
import Sections from './utilities/resources/resources';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      section: 0,
      part: 0,
      toggledParts: Sections[0].parts[0].content.map(() => false),
      image: Sections[0].parts[0].preview,
      partImage: false
    }
    this.handlePartIncrease = this.handlePartIncrease.bind(this)
    this.handlePartDecrease = this.handlePartDecrease.bind(this)
    this.handleSectionIncrease = this.handleSectionIncrease.bind(this)
    this.handleSectionDecrease = this.handleSectionDecrease.bind(this)
    this.handlePartToggle = this.handlePartToggle.bind(this)
  }

  handlePartToggle(part) {
    const noParts = Sections[this.state.section].parts[this.state.part].content.length
    let newToggled = new Array(noParts).fill(false);
    let newImage = Sections[this.state.section].parts[this.state.part].preview;
    let newPartImage = false;
    if (part >= 0 && part < noParts) {
      newToggled[part] = true;
      newImage = Sections[this.state.section].parts[this.state.part].preview
      newPartImage = Sections[this.state.section].parts[this.state.part].content[part].preview
    }
    this.setState({
      toggledParts: newToggled,
      image: newImage,
      partImage: newPartImage
    })
  }

  handlePartIncrease() {
    if(this.state.part < (Sections[this.state.section].parts.length - 1) ) {
      this.setState(prevState => ({
        part: (prevState.part + 1),
        toggledParts: Sections[this.state.section].parts[prevState.part + 1].content.map(() => false),
        image: Sections[this.state.section].parts[prevState.part + 1].preview,
        partImage: false
      }))
    }
  }

  handlePartDecrease() {
    if(this.state.part > 0) {
      this.setState(prevState => ({
        part: (prevState.part - 1),
        toggledParts: Sections[this.state.section].parts[prevState.part - 1].content.map(() => false),
        image: Sections[this.state.section].parts[prevState.part - 1].preview,
        partImage: false
      }))
    }
  }

  handleSectionIncrease() {
    if(this.state.section < (Sections.length - 1) ) {
      this.setState(prevState => ({
        section: (prevState.section + 1),
        part: 0,
        toggledParts: Sections[prevState.section + 1].parts[0].content.map(() => false),
        image: Sections[prevState.section + 1].parts[0].preview,
        partImage: false
      }))
    }
  }

  handleSectionDecrease() {
    if(this.state.section > 0) {
      this.setState(prevState => ({
        section: (prevState.section - 1),
        part: 0,
        toggledParts: Sections[(prevState.section - 1)].parts[0].content.map(() => false),
        image: Sections[prevState.section - 1].parts[0].preview,
        partImage: false
      }))
    }
  }

  render() {
    return (
      <div id="container">
        <Header
          partTitle={Sections[this.state.section].parts[this.state.part].title}
          partIncrease={this.handlePartIncrease}
          partDecrease={this.handlePartDecrease}
          sectionTitle={Sections[this.state.section].title}
          sectionIncrease={this.handleSectionIncrease}
          sectionDecrease={this.handleSectionDecrease}
        />
        <div className="holder">
          <div className="left side">
            <Preview
              image={this.state.image}
              part={this.state.partImage}
            />
          </div>
          <div className="right side">
            <Details
              content={Sections[this.state.section].parts[this.state.part].content}
              toggled={this.state.toggledParts}
              onClick={this.handlePartToggle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
