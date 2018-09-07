import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {navPage} from '../js/actions/index';
import axios from "axios";
import GroupNavBar from './GroupNavBar';





class MyEventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsList: [],
    }
  }

  componentDidMount() {
    axios.post('/api/getEvents',
    {eventHost: this.props.userProfile._id,

    })
    .then((response) =>  {
      response.data.map(myEvent => {
        this.setState({eventsList: [...this.state.eventsList, myEvent]})
      })
    })
  };

      handleInviteDoctor(event, myEvent) {
          event.preventDefault();


          this.props.setEvent(myEvent)
          setTimeout(this.props.navToPage('inviteDoctorPage'), 0)
      }


  render() {

    return (
      <div style={center}>
          <GroupNavBar/>
        In my events listed page!
      <div>
        {this.state.eventsList.map(myEvent =>
          <div>
          {myEvent.title}
          <Button
              onClick={(event)=> this.handleInviteDoctor(event, myEvent)}>Invite Doctors</Button>
          </div>
        )}
      </div>
    </div>

    );
  }
}
const center = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  width: "100%",
  height: "100%",
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
   setEvent: (myEvent) => {
     dispatch({type: 'SET_EVENT', event: myEvent})
   }
 }
}

MyEventsPage = connect(mapStateToProps, mapDispatchToProps)(MyEventsPage);

export default MyEventsPage;
