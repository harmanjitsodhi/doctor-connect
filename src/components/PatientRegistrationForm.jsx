import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import {navPage} from '../js/actions/index';
import {connect} from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import groupInterests from '../specialtiesSRC';

class PatientRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientName: '',
      patientAbout: '',
      open: false,
      interest: [],


    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });

  };


handleCompletePatientProfile(event, user, name, about, isGroup, interest) {

  event.preventDefault();



  axios.post('/api/addGroup',
  {user: this.props.userId,
    name: this.state.patientName,
    about: this.state.patientAbout,
    email: this.state.patientEmail,
    interest: this.state.interest,
    isGroup: false
  })
  .then((response) => {
    if (!response.data._id) {
      alert ("Unable to update profile ")
      // this.props.navToPage('registration')
    } else {
        this.props.navToPage('login')
    }

  })

}


  render() {
    return (
      <div>
        This is my Group Registration form!!
        <Paper>
          <form>
            <TextField type="text" label="Enter Your Name"
              onChange={(e) => this.setState({patientName: e.target.value})}/>
              <br/>
            <TextField style={{width: "80%"}} multiline rowsMax="50" type="text" label="A little about yourself!"
              onChange={(e) => this.setState({patientAbout: e.target.value})}/>
              <br/>
              <form autoComplete="off">

                <FormControl>
                  <InputLabel htmlFor="interest-controlled-open-select">Interests</InputLabel>
                  <Select multiple
                    open={this.state.open}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    value={this.state.interest}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'interest',
                      id: 'interest-controlled-open-select',
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>

                    {groupInterests.map((interest, index) => <MenuItem key={index} value={interest}>{interest}</MenuItem>)}


                  </Select>
                </FormControl>

              </form>

            <Button onClick={(event) =>
              this.handleCompletePatientProfile(event)}>
              Complete Profile!</Button><br/>

          </form>
          </Paper>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
 return {
   mode: state.mode,

   userId: state.userId
 }
};

const mapDispatchToProps = (dispatch) => {
 return {
   navToPage: (mode) => {
     dispatch(navPage(mode))
   },
   }
 }

PatientRegistrationForm = connect(mapStateToProps, mapDispatchToProps)(PatientRegistrationForm);

export default PatientRegistrationForm;
