import React, { Component } from 'react';
import "./preview.css"

class Preview extends Component {
  render() {
    return (
      <div id="preview">
        {this.props.image}
        {this.props.part}
      </div>
    )
  }
}

export default Preview;
