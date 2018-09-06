import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {navPage} from '../js/actions/index';
import axios from "axios";
import DoctorNavBar from './DoctorNavBar';

class DoctorPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }



  render() {

    return (
      <div style={center}>
        <DoctorNavBar/>



      <div>
        In Doctor Portal!
        {this.props.userProfile.name}
      </div>
      <div> HELLO </div>

  </div>
    );
  }
}

const mapStateToProps = (state) => {
 return {
   mode: state.mode,
   userProfile: state.userProfile,
 }
};

const mapDispatchToProps = (dispatch) => {
 return {
   navToPage: (mode) => {
     dispatch(navPage(mode))
   },
 }
}
const center = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  width: "100%",
  height: "100%",
}
// const naveBarStyle={
// background: "#eee",
//   float: "left",
// }

DoctorPortal = connect(mapStateToProps, mapDispatchToProps)(DoctorPortal);

export default DoctorPortal;
