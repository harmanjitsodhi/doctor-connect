import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {navPage} from './js/actions/index';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import DoctorRegistrationForm from './components/DoctorRegistrationForm';
import GroupRegistrationForm from './components/GroupRegistrationForm';
import PatientRegistrationForm from './components/PatientRegistrationForm';
import DoctorPortal from './components/DoctorPortal';
import CreateEventPage from './components/CreateEventPage';
import InviteDoctorPage from './components/InviteDoctorPage';
import InviteGroupsPage from './components/InviteGroupsPage';
import MyEventsPage from './components/MyEventsPage';
import MyInvitesPage from './components/MyInvitesPage';
import GroupPortal from './components/GroupPortal';
import Button from '@material-ui/core/Button';
import {Healing} from "@material-ui/icons";

class App extends Component {



  // submitContact(event, contact) {
  //   event.preventDefault();
  //   var self = this;
  //   axios.post('/api/addContact', contact)
  //   .then(function(response) {
  //     console.log('success!!', response);
  //   })
  // }


render() {
  let page;
      if(this.props.mode === "login") page = <LoginForm app={this}/>
      else if(this.props.mode === "registration") page = <RegistrationForm app={this}/>
      else if(this.props.mode === "group") page = <GroupRegistrationForm app={this}/>
      else if(this.props.mode === "createEventPage") page = <CreateEventPage app={this}/>
      else if(this.props.mode === "myEventsPage") page = <MyEventsPage app={this}/>
      else if(this.props.mode === "doctor") page = <DoctorRegistrationForm app={this}/>
      else if(this.props.mode === "inviteDoctorPage") page = <InviteDoctorPage app={this}/>
        else if(this.props.mode === "myInvitesPage") page = <MyInvitesPage app={this}/>
      else if(this.props.mode === "patient") page = <PatientRegistrationForm app={this}/>
      else if(this.props.mode === "inviteGroupsPage") page = <InviteGroupsPage app={this}/>
      else if(this.props.mode === "doctorPortal") page = <DoctorPortal app={this}/>
      else if(this.props.mode === "groupPortal") page = <GroupPortal app={this}/>
      // else if(this.state.mode === "newQuiz") screen = <NewQuiz app={this}/>
      // else if(this.state.mode === "questions") screen = <Questions app={this}/>
      else  page =
      <div>
        <img style={{height: "50px", width:"50px", padding: "10px"}}
          src={"https://image.freepik.com/free-icon/stethoscope-medical-tool_318-61950.jpg"}/>
        <h3> Welcome to Doctor Connect!</h3>
        <p>This is an app to help patients, doctors, and organizations
          to connect, plan events, and share information!</p>
        <Button
                onClick={() => this.props.navToPage('login')}>Login</Button>
        <Button
                onClick={() => this.props.navToPage('registration')}>Register</Button>
      </div>


    return (

      <div className="App">
        {page}
      </div>


      // <div className="App">
// {/* <form>
// <input type="text" value={this.state.username} placeholder="username"
// onChange={(event) => this.setState({username: event.target.value})}/>
// <input type="password" value={this.state.password} placeholder="password"
// onChange={(event) => this.setState({password: event.target.value})}/>
// <input type="submit" value="submit"
// onClick={(event) => this.submitContact(event, {username: this.state.username, password: this.state.password})}/>
// </form> */}

      // </div>
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
};

App = connect(mapStateToProps, mapDispatchToProps)(App);


export default App;
