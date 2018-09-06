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

class MyInvitesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inviteList: [],
    }
  }

  componentDidMount() {
    axios.post('/api/getInvites',
    {docID: this.props.userProfile._id,

    })
    .then((response) =>  {
      response.data.map(invite => {
        this.setState({inviteList: [...this.state.inviteList, invite]})
      })
    })
  };

handleAcceptInvite(event,invite) {
  event.preventDefault();
  let doctorID = this.props.userProfile._id;
  axios.post('/api/acceptInvite',
  {
    event: [invite],
    doctorID: doctorID,
  })
  .then(()=> {
  alert('invite accepted')
})
}


  render() {
    console.log(this.state.inviteList);

    return (
      <div>
        In my invites page!
        <div>
          {this.state.inviteList.map(invite =>
            <div>
            {invite.title} {invite.eventDescription} {invite.location}
            <Button
                onClick={(event)=> this.handleAcceptInvite(event,invite)}>Accept Invite</Button>
{/* need to put events in here (are they stored in state?) */}
                {/* <MapContainer events={}/> */}
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

MyInvitesPage = connect(mapStateToProps, mapDispatchToProps)(MyInvitesPage);

export default MyInvitesPage;
