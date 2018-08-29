import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import axios from "axios";
import {navPage} from '../js/actions/index';



class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userType: ''
    }
  }


    handleRegistration(event, username, password, userType) {

      event.preventDefault();


      axios.post('/api/addUser', {username: username, password: password, userType: userType})
      .then(function(response) {
        console.log('success!!', response);
      })
      .then(this.props.navToPage('login'))


    }
    //not sure if this.props.navToPage will work- can a component rendered inside of connected one

    // console.log("mode from props ", this.props.mode)


  render() {
    
    return (
      <div >
        <Paper>
          <form>
            <TextField type="text" label="Username"
              onChange={(e) => this.setState({username: e.target.value})}/>
              <br/>
            <TextField type="password" label="Password"
              onChange={(e) => this.setState({password: e.target.value})}/>
              <br/>
              <Button
              onClick={(e) => this.setState({userType: 'group'})}>I'm an an Org</Button><br/>
            <Button
              onClick={() => this.setState({userType: 'doctor'})}>I'm a Doctor</Button><br/>

            <Button onClick={(event) =>
              this.handleRegistration(event, this.state.username, this.state.password, this.state.userType)}>
              Register</Button><br/>
            <a onClick={() => this.props.navPage({mode: "login"})}>Already have an account?</a>
          </form>
          </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 return {
   mode: state.mode,
 }
};

const mapDispatchToProps = (dispatch) => {
 return {
   navToPage: (mode) => {
     dispatch(navPage(mode))
   },
 }
}

RegistrationForm = connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

export default RegistrationForm;
