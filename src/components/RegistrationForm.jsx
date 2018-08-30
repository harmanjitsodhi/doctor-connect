import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
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
    }
  }

// const self = this;
    handleRegistration(event, username, password, userType) {

      event.preventDefault();



      axios.post('/api/addUser', {username: username, password: password, userType: this.props.userType})
      .then((response) => {
        if (!response.data._id) {
          alert ("Unsuccessful registration")

          // this.props.navToPage('registration')
        } else {
            this.props.setUserId(response.data._id)
            this.props.navToPage(this.props.userType)
        }

      })

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
              onClick={() => this.props.setUserType('group')}>I'm an an Org</Button><br/>
            <Button
              onClick={() => this.props.setUserType('doctor')}>I'm a Doctor</Button><br/>
              <Button
              onClick={() => this.props.setUserType('patient')}>I'm an independent</Button><br/>
            <Button onClick={(event) =>
              this.handleRegistration(event, this.state.username, this.state.password, this.props.userType)}>
              Register</Button><br/>
            <Button onClick={() => this.props.navToPage('login')}>Already have an account?</Button>
          </form>
          </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 return {
   mode: state.mode,
   userType: state.userType,
 }
};

const mapDispatchToProps = (dispatch) => {
 return {
   navToPage: (mode) => {
     dispatch(navPage(mode))
   },
   setUserType: (userType) => {
     dispatch({type: 'SET_USERTYPE', userType: userType})
   },
   setUserId: (userId) => {
     dispatch({type: 'SET_USERID', userId: userId})
   }
 }
}

RegistrationForm = connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

export default RegistrationForm;
