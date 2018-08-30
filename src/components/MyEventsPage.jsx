import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {navPage} from '../js/actions/index';
import axios from "axios";

class MyEventsPage extends Component {

  render() {
    return (
      <div>
        In my events listed page!

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

MyEventsPage = connect(mapStateToProps, mapDispatchToProps)(MyEventsPage);

export default MyEventsPage;
