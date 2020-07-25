import React, { Component } from 'react';

class Label extends Component {
  render() {
    return (
      <label>{this.props.labelContent}</label>
    )
  }
}

export default Label;