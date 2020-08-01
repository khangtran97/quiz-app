import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCountDown, setStopCountDown } from '../../store/actions'

const INTERVAL_LENGTH = 1000;

class Timer extends Component {
  constructor() {
    super();

    this.startTimer = this.startTimer.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isStart !== this.props.isStart) {
      if (this.props.isStart) {
        this.startTimer();
      }
    }
  }

  startTimer() {
    const { setCountDown } = this.props;

    this.interval = setInterval(() => {
      setCountDown();
      if (this.props.remainTime <= 0) {
        clearInterval(this.interval);
        setStopCountDown();
      }
    }, INTERVAL_LENGTH);
  }

  render() {
    const { remainTime, isStart, setTimer } = this.props;
    return (
      <div>{remainTime}</div>
    )
  }
}
const mapDispatchToProps = ({
  setCountDown,
  setStopCountDown
});

const mapStateToProps = state => ({
  remainTime: state.Timer.remain_time,
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer);