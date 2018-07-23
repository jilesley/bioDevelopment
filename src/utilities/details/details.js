import React, { Component } from 'react';
import Heading from './heading';
import "./details.css";

class Details extends Component {
  render() {
    let key = -1;
    return (
      <div id="details">
        {this.props.content.map( heading => {
            key ++
            return <Heading
                      key={key}
                      pos={key}
                      title={heading.title}
                      content={heading.content}
                      toggled={this.props.toggled[key]}
                      onClick={this.props.onClick}
                   />
          })}
      </div>
    )
  }
}

export default Details;
