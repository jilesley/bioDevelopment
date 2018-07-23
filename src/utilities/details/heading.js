import React, { Component } from 'react';

class Heading extends Component {
  constructor(props) {
    super(props)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClickClose = this.handleClickClose.bind(this)
  }

  handleClickOpen() {
    this.props.onClick(this.props.pos)
  }

  handleClickClose() {
    this.props.onClick(-1)
  }

  render() {
    if(this.props.toggled){
      return (
        <div className="section">
          <button className="heading" onClick={this.handleClickClose} >{this.props.title}</button>
          {this.props.content}
        </div>
      )
    } else {
      return (
        <div className="section">
          <button className="heading" onClick={this.handleClickOpen}>{this.props.title}</button>
        </div>
      )
    }
  }
}

export default Heading;
