import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {navPage} from '../js/actions/index';

class DoctorPortal extends Component {

  render() {
    return (
      <div>
        In Doctor Portal!
        {this.userProfile.name}
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

DoctorPortal = connect(mapStateToProps, mapDispatchToProps)(DoctorPortal);

export default DoctorPortal;