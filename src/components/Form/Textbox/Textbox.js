import React, { Component } from 'react';

import Label from '../Label/Label';

class TextboxBase extends Component {
  render() {
    return (
      <>
        <Label labelContent={this.props.text} />
        <input
          className={this.props.className}
          type={this.props.inputType}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.changeHandler} />
      </>
    )
  }
}

export default TextboxBase;