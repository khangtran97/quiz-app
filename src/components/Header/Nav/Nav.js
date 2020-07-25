import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Nav.module.css';

class Nav extends Component {
  render() {
    return (
      <ul className={classes.NavigationItems}>
        {this.props.navs.map(nav => (
          <li key={nav.state_id} next={nav.can_next} onClick={() => this.props.clickGetStarted(nav.state_id)}><a href={this.props.link}>{nav.text}</a></li>
        ))}
      </ul>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickGetStarted: (id) => dispatch({ type: 'GET_STARTED', stateId: id})
  }
}

export default connect(null, mapDispatchToProps)(Nav);