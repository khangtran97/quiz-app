import React, { Component } from 'react';
import { connect } from 'react-redux';

import Textbox from './Textbox/Textbox';
import Checkbox from './Checkbox/Checkbox';
import Button from './Button/Button';
import classes from './Form.module.css';

class FormBase extends Component {
  state = {
    username: "",
    email: "",
    sendEmailCheckbox: false,
    exportCheckbox: false
  }

  textboxHandler(e, type) {
    const changedValue = e.target.value;
    this.setState({[type]: changedValue});
  }

  checkBoxHandler(e, type) {
    const changedValue = e.target.checked;
    this.setState({[type]: changedValue});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitFormAction(this.state);
    this.resetFormHandler();
  }

  resetFormHandler() {
    this.setState({
      username: "",
      email: "",
      sendEmailCheckbox: false,
      exportCheckbox: false
    });
  }

  checkReducerHandler() {

  }

  render() {
    return (
      <form className={classes.Form} onSubmit={(event) => this.handleSubmit(event)}>
        <Textbox
         text="Username:"
         placeholder="Username"
         inputType="text"
         value={this.state.username}
         changeHandler={event => this.textboxHandler(event, "username")}
          />
        <Textbox 
         text="Email:"
         placeholder="Email"
         inputType="email"
         value={this.state.email}
         changeHandler={event => this.textboxHandler(event, "email")}/>

        <Checkbox
          changeHandler={event => this.checkBoxHandler(event, "sendEmailCheckbox")}
          checked={this.state.sendEmailCheckbox}
          text="Send to Email"/>
        <Checkbox
          changeHandler={event => this.checkBoxHandler(event, "exportCheckbox")}
          checked={this.state.exportCheckbox}
          text="Export to PDF"/>
        <Button btnName="Submit" btnType="submit"/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  submitFormAction: payload => dispatch({ type: 'SAVE_FORM', payload })
})


export default connect(null, mapDispatchToProps)(FormBase);