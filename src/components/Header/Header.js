import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import classes from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <Logo />
        <Nav navs={this.props.navItems} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    navItems: state.Nav
  }
}

export default connect(mapStateToProps)(Header);