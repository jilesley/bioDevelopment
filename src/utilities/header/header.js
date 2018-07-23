import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
  render() {
    return (
      <div id="title">
        <div id="sections">
          <button onClick={this.props.sectionDecrease} > {"<"} </button>
          <h1>{this.props.sectionTitle}</h1>
          <button onClick={this.props.sectionIncrease} > {">"} </button>
        </div>
        <div id="parts">
          <button onClick={this.props.partDecrease} > {"<"} </button>
          <h1>{this.props.partTitle}</h1>
          <button onClick={this.props.partIncrease} > {">"} </button>
        </div>
      </div>
    )
  }
}

export default Header
