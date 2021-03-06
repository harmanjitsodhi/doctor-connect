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





class InviteDoctorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorsList: [],
      filterObject: '',
    }
  }
  componentDidMount() {

    axios.get('/api/getDoctors')

    .then((response) =>  {
      response.data.map(doctor => {
        for (let i = 0; i < this.props.event.invitedDoctors.length; i++) {
          if (this.props.event.invitedDoctors[i] == doctor._id) {
            return
          }
        }
        this.setState({doctorsList: [...this.state.doctorsList, doctor]})
      })
    })
  };

  handleSendInvite(id) {
 let eventID = this.props.event._id;
    axios.post('/api/inviteDoctor',
    {
      _id: eventID,
      invitedDoctorId: [id],
    })
    .then(
                this.props.navToPage('myEventsPage')
    
          )
        };


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  // filterListSearch(event) {
  //
  // }
  //
  // filterList: function(event){
  //   var updatedList = this.state.initialItems;
  //   updatedList = updatedList.filter(function(item){
  //     return item.toLowerCase().search(
  //       event.target.value.toLowerCase()) !== -1;
  //   });
  //   this.setState({items: updatedList});
  // }


  render() {
    return (
      <div style={center}>
        In my invite doctors page!
        <GroupNavBar/>

        <form autoComplete="off">

       <FormControl>
         <InputLabel htmlFor="filterObject-controlled-open-select">Filter by</InputLabel>
         <Select
           open={this.state.open}
           onClose={this.handleClose}
           onOpen={this.handleOpen}
           value={this.state.filterObject}
           onChange={this.handleChange}
           inputProps={{
             name: 'filterObject',
             id: 'filterObject-controlled-open-select',
           }}
         >
           <MenuItem value="">
             <em>None</em>
           </MenuItem>

           {filterByList.map((list, index) => <MenuItem key={index} value={list}>{list}</MenuItem>)}


         </Select>
       </FormControl>
     </form>
      <div>
        {this.state.doctorsList.map(doctor =>
          <div>
<div>

          <div>name: {doctor.name} </div>
          <div>specialty: {doctor.specialty}</div>
          <div>language: {doctor.language[0]} {doctor.language[1]} {doctor.language[2]} </div>
          <div>location: {doctor.location} </div>
          <div>email: {doctor.email} </div>
        </div>
          <Button
              onClick={()=> this.handleSendInvite(doctor._id)}>Invite this Doctor</Button>
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

InviteDoctorPage = connect(mapStateToProps, mapDispatchToProps)(InviteDoctorPage);

export default InviteDoctorPage;
