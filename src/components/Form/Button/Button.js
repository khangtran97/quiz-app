import React, { Component } from 'react';

class TextboxBase extends Component {
  render() {
    return (
    <button
      type={this.props.btnType}
      className={this.props.className} 
      onClick={this.props.handleAction}>
        {this.props.btnName}
      </button>
    )
  }
}

export default TextboxBase;