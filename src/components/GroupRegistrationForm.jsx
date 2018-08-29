import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

class GroupRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgName: '',
      orgAbout: '',
      orgEmail: ''

    }
  }
handleCompleteProfile(event) {
  console.log("group profile complete!");
}


  render() {
    return (
      <div>
        This is my Group Registration form!!
        <Paper>
          <form>
            <TextField type="text" label="Organization Name"
              onChange={(e) => this.setState({orgName: e.target.value})}/>
              <br/>
            <TextField style={{width: "80%"}} multiline rowsMax="50" type="text" label="About Your Organization"
              onChange={(e) => this.setState({orgAbout: e.target.value})}/>
              <br/>
              <TextField type="text" label="Enter Contact Email"
                onChange={(e) => this.setState({orgEmail: e.target.value})}/>
                <br/>

            <Button onClick={(event) =>
              this.handleCompleteProfile(event)}>
              Complete Profile!</Button><br/>

          </form>
          </Paper>
      </div>
    );
  }
}

export default GroupRegistrationForm;
