import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';


class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userType: ''

    }
  }

  handleRegistration() {
    console.log('im handling registration in backend rn');
    this.props.navPage('login');
    console.log()
  }

  render() {
    return (
      <div >

            <TextField type="text" label="Username"
              onChange={(e) => this.setState({username: e.target.value})}/><br/>
            <TextField type="password" label="Password"
              onChange={(e) => this.setState({password: e.target.value})}/><br/>
              <Button
              onClick={(e) => this.setState({userType: 'group'})}>I'm an an Org</Button><br/>
            <Button
              onClick={() => this.setState({userType: 'doctor'})}>I'm a Doctor</Button><br/>

            <Button onClick={() => this.handleRegistration()}>Register</Button><br/><br/>
            <a onClick={() => this.props.navPage({mode: "login"})}>Already have an account?</a>

      </div>
    );
  }
}
// document.getElementByClassName("btn").style.backgroundColor = "yellow";

export default RegistrationForm;
