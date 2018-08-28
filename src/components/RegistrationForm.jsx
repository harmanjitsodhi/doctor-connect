import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import styles from './styles';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',

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

            <Button onClick={() => this.handleRegistration()}>Register</Button><br/><br/>
            <a onClick={() => this.props.navPage({mode: "login"})}>Already have an account?</a>

      </div>
    );
  }
}
// document.getElementByClassName("btn").style.backgroundColor = "yellow";

export default RegistrationForm;
