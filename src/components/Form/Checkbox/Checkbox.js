import React, { Component } from 'react';

import Label from '../Label/Label';

class CheckboxBase extends Component {
  render() {
    return (
      <>
        <input
          className={this.props.className}
          type="checkbox"
          checked={this.props.checked}
          onChange={this.props.changeHandler} />
        <Label labelContent={this.props.text}/>
      </>
    )
  }
}

export default CheckboxBase;