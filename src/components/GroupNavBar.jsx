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

class GroupNavBar extends Component {
  constructor(props) {
    super(props);

  }

  


  render() {

    return (
      <div>
      <navbar style={naveBarStyle}>
        <h3>Welcome, {this.props.userProfile.name}!</h3>

            <Button onClick={() => this.props.navToPage('groupPortal')}>Home</Button><br/>
            <Button onClick={() => this.props.navToPage('')}>Logout</Button><br/>



            <Button onClick={() => this.props.navToPage('createEventPage')}>Create Event</Button><br/>
            <Button onClick={() => this.props.navToPage('myEventsPage')}>See my Events</Button><br/>


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

GroupNavBar = connect(mapStateToProps, mapDispatchToProps)(GroupNavBar);

export default GroupNavBar;
