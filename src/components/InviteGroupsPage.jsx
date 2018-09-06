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
import {filterByList} from '../specialtiesSRC';
import GroupNavBar from './GroupNavBar';





class InviteGroupsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupsList: [],



    }
  }

  componentDidMount() {

    axios.get('/api/getGroups')

    .then((response) =>  {


      response.data.map(group => {
        this.setState({groupsList: [...this.state.groupsList, group]})
      })
    })
  };

  handleSendInvite(id) {
 console.log("this is where follow function should be!");
  };

  render() {




    return (
      <div style={center}>
        In my invite Groups page!
        <GroupNavBar/>

        <form autoComplete="off">


     </form>
      <div>
        {this.state.groupsList.map(group =>
          <div>
<div>

          <div>name: {group.name} </div>
          <div>about: {group.about}</div>
          <div>interests: {group.interest[0]} {group.interest[1]} {group.interest[2]} </div>

          <div>email: {group.email} </div>
        </div>
          <Button
              onClick={()=> this.handleFollowGroups(group._id)}>Follow</Button>
          </div>
        )}
      </div>
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
const center = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  width: "100%",
  height: "100%",
}

InviteGroupsPage = connect(mapStateToProps, mapDispatchToProps)(InviteGroupsPage);

export default InviteGroupsPage;
