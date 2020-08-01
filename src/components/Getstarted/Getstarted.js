import React, { Component } from 'react';

import Video from './Video/Video';
import Button from '../Form/Button/Button';

class Getstarted extends Component {
  render() {
    return (
      <div>
        <Video />
        <Button type="button" btnName="next"/>
      </div>
    )
  }
}

export default Getstarted;