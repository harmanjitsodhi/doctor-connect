import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {connect} from 'react-redux';
import {navPage} from '../js/actions/index';
import axios from "axios";
import MapContainer from "../components/GoogleMap/MapContainer";

class DoctorNavBar extends Component {
  constructor(props) {
    super(props);

  }
  handleSeeEvents(event) {
    let subbedEvents = this.props.userProfile.subscribedEvents;
    event.preventDefault();
    console.log("array of objects", subbedEvents);

    axios.post('/api/getSubscribedEvents',
    {event: subbedEvents}
    )
    .then((response) => {
      console.log("event:" , response.data);

    })
  }



  render() {

    return (
      <div>
      <navbar style={naveBarStyle}>
        <h3>Welcome, {this.props.userProfile.name}!</h3>

            <Button onClick={() => this.props.navToPage('doctorPortal')}>Home</Button><br/>
            <Button onClick={() => this.props.navToPage('myInvitesPage')}>See Invites</Button><br/>
              <Button onClick={(event) => this.handleSeeEvents(event)}>See Upcoming Events</Button><br/>
            <Button onClick={() => this.props.navToPage('')}>Logout</Button><br/>

        <Button> Button3 </Button><br/>
        <Button> Button4 </Button><br/>
        <Button> Button5 </Button><br/>

      </navbar>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
 return {
   mode: state.mode,
   userProfile: state.userProfile,
   event: state.event,
 }
};

const mapDispatchToProps = (dispatch) => {
 return {
   navToPage: (mode) => {
     dispatch(navPage(mode))
   },
 }
}

const naveBarStyle={
background: "#eee",
  float: "left",
}

DoctorNavBar = connect(mapStateToProps, mapDispatchToProps)(DoctorNavBar);

export default DoctorNavBar;
