import React, { Component } from 'react';
import { connect } from 'react-redux';

import Checkbox from '../Form/Checkbox/Checkbox';
import Timer from '../TImer/Timer';
import Button from '../Form/Button/Button';

import { setReadAll, setAgree } from '../../store/actions'

class Acknowledgement extends Component {
  state = {
    isCalled: false,
    isChecked: false,
    isStart: false
  }
  constructor( props ){
    super( props );
    this.onChecked = this.onChecked.bind(this);
    this.onStartHandler = this.onStartHandler.bind(this);
  } 

  onScrollEvent(e) {
    const { setReadAll } = this.props;
    console.info(e?.target?.scrollTop)
    if (e?.target?.scrollTop >= 190 && !this.state.isCalled) {
      this.setState({ isCalled: true }, () => setReadAll({ isReadAll: this.state.isCalled}));
    }
  }

  onChecked() {
    const { setAgree } = this.props;
    this.setState({
      isChecked: !this.state.isChecked
    }, () => setAgree({ isAgree: this.state.isChecked }));

  }

  onStartHandler() {
    this.setState({isStart: true});
  }


  render() {
    return (
      <>
        <h2>ACKNOWLEDGE</h2>
        <Timer isStart={this.state.isStart}/>
        <div style={{
          width: "400px",
          height: "180px",
          overflowY: "scroll",
          margin: "25px auto"
        }} onScroll={e => this.onScrollEvent(e)}>
          <p>policy policy policy policy policy policy policy policy
          policy policy policy policy policy policy policy policy
          policy policy policy policy policy policy policy policy
          policy policy policy policy policy policy policy policy
          policy policy policy policy policy policy policy policy
          policy policy policy policy policy policy policy policy
          policy policy policy policy policy policy policy policy
          policy policy policy policy policy policy policy policy
          policy policy policy policy policy policy policy policy
          policy policy policy policy policy policy policy policy
          policy policy policy policy policy policy policy policy
          policy policy policy policy policy policy policy policy
          policy policy policy policy policy policy policy policy
          policy policy policy policy policy policy policy policy
          policy policy policy policy policy policy policy policy
            policy policy policy policy policy policy policy policy </p>

          <Checkbox
            checked={this.state.isChecked}
            changeHandler={this.onChecked}
            text="Agreement" />
        </div>
        <Button btnName="Start" handleAction={this.onStartHandler}/>
      </>
    )
  }
}

const mapDispatchToProps = ({
  setAgree,
  setReadAll
});

export default connect(null, mapDispatchToProps)(Acknowledgement);