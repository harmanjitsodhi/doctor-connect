import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {navPage} from '../js/actions/index';
import GroupNavBar from './GroupNavBar';

class GroupPortal extends Component {


  render() {
    return (
      <div style={center}>
        <GroupNavBar/>
        In Group Portal!
        {this.props.userProfile.name}

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

GroupPortal = connect(mapStateToProps, mapDispatchToProps)(GroupPortal);

export default GroupPortal;
