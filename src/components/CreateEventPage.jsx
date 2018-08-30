import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {navPage} from '../js/actions/index';
import axios from "axios";

class CreateEventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      eventDescription: '',
      eventLocation: '',

    }
  }

  handleCreateEvent(event, title, eventDescription, location, eventHost) {
    event.preventDefault();

    axios.post('/api/addEvent',
    {title: this.state.eventName,
      eventDescription: this.state.eventDescription,
      location: this.state.eventLocation,
      eventHost: this.props.userProfile._id,
    })
    .then((response) => {
      console.log("event Created!");
      this.props.navToPage('myEventsPage')


    })
  }

  render() {
    return (
      <div>
      <h1>
        In createEventPage Portal!
      </h1>

        <form>

          <TextField type="text" label="Event Name"
            onChange={(e) => this.setState({eventName: e.target.value})}/>
            <br/>
          <TextField style={{width: "80%"}} multiline rowsMax="50" type="text" label="Event Description"
            onChange={(e) => this.setState({eventDescription: e.target.value})}/>
            <br/>
            <TextField type="text" label="Location"
              onChange={(e) => this.setState({eventLocation: e.target.value})}/>
              <br/>
              <Button onClick={(event) => this.handleCreateEvent(event)}>Create Event</Button><br/>


        </form>
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

CreateEventPage = connect(mapStateToProps, mapDispatchToProps)(CreateEventPage);

export default CreateEventPage;
