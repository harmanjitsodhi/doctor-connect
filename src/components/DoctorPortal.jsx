import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {navPage} from '../js/actions/index';
import axios from "axios";

class DoctorPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }

  handleViewInvites() {
    // axios.post('/api/getInvites',
    // {docID: this.props.userProfile._id,
    //
    // })
    // .then((response) =>  {
    //   response.data.map(invite => {
    //     this.setState({inviteList: [...this.state.inviteList, invite]})
    //   })
    // })
    this.props.navToPage('myInvitesPage');

  }

  render() {

    return (
      <div>
      <div>
        In Doctor Portal!
        {this.props.userProfile.name}
      </div>
    <div>
      <Button
          onClick={()=> this.handleViewInvites()}>See Invites</Button>

    </div>
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
