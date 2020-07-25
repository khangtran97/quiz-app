import React, { Component } from 'react';

import quizLogo from '../../../assets/quiz-logo.jpg';
import classes from './Logo.module.css';

class Logo extends Component {
  render() {
    return (
      <div className={classes.Logo}>
        <a href={this.props.link}><img  src={quizLogo} alt="QuizApp" /></a>
      </div>
    )
  }
}

export default Logo;