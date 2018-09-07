import React, { Component } from 'react';
import axios from "axios";



class DoctorNavBar extends Component {
  constructor(props) {
    super(props);

  }



  render() {

    return (
      <div>
      <navbar style={naveBarStyle}>
        <h3>Welcome, {this.props.userProfile.name}!</h3>

            <Button onClick={() => this.props.navToPage('doctorPortal')}>Home</Button><br/>
            <Button onClick={() => this.props.navToPage('myInvitesPage')}>See Invites</Button><br/>
            <Button onClick={() => this.props.navToPage('')}>Logout</Button><br/>

        <Button> Button3 </Button><br/>
        <Button> Button4 </Button><br/>
        <Button> Button5 </Button><br/>

      </navbar>
    </div>
    );
  }
}
