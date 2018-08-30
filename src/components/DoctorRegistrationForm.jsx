import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {specialties, languages} from '../specialtiesSRC';
import axios from "axios";
import {navPage} from '../js/actions/index';
import {connect} from 'react-redux';

class DoctorRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorName: '',
      occupation: '',
      doctorEmail: '',
      open: false,
      languageOpen: false,
      doctorLocation: '',
      doctorLanguage: [],

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
  handleLanguageClose = () => {
    this.setState({ languageOpen: false });
  };

  handleLanguageOpen = () => {
    this.setState({ languageOpen: true });
  };





  handleCompleteDoctorProfile(event,user, name, specialty, language, location,email) {

    event.preventDefault();
    axios.post('/api/addDoctor',
    {user: this.props.userId,
      name: this.state.doctorName,
      specialty: this.state.occupation,
      language: this.state.doctorLanguage,
      location: this.state.doctorLocation,
      email: this.state.doctorEmail
    })
    .then((response) => {
      if (!response.data._id) {
        alert ("Unable to Complete Profile")
        // this.props.navToPage('registration')
      } else {
          this.props.navToPage('login')
      }

    })

  }


  render() {
    return (
      <div>
        This is my Doctor Registration Form!!
        <Paper>
          <form>
            <TextField type="text" label="First + Last Name"
              onChange={(e) => this.setState({doctorName: e.target.value})}/>
              <br/>

              <TextField type="text" label="Enter Contact Email"
                onChange={(e) => this.setState({doctorEmail: e.target.value})}/>
                <br/>
                <TextField type="text" label="Zip Code"
                  onChange={(e) => this.setState({doctorLocation: e.target.value})}/>
                  <br/>


        <form autoComplete="off">

       <FormControl>
         <InputLabel htmlFor="occupation-controlled-open-select">Occupation</InputLabel>
         <Select
           open={this.state.open}
           onClose={this.handleClose}
           onOpen={this.handleOpen}
           value={this.state.occupation}
           onChange={this.handleChange}
           inputProps={{
             name: 'occupation',
             id: 'occupation-controlled-open-select',
           }}
         >
           <MenuItem value="">
             <em>None</em>
           </MenuItem>

           {specialties.map((specialty, index) => <MenuItem key={index} value={specialty}>{specialty}</MenuItem>)}


         </Select>
       </FormControl>
     </form>
     <form autoComplete="off">

       <FormControl>
         <InputLabel htmlFor="language-controlled-open-select">Languages</InputLabel>
         <Select multiple
           open={this.state.languageOpen}
           onClose={this.handleLanguageClose}
           onOpen={this.handleLanguageOpen}
           value={this.state.doctorLanguage}
           onChange={this.handleChange}
           inputProps={{
             name: 'doctorLanguage',
             id: 'language-controlled-open-select',
           }}
         >
           <MenuItem value="">
             <em>None</em>
           </MenuItem>

           {languages.map((language, index) => <MenuItem key={index} value={language}>{language}</MenuItem>)}


         </Select>
       </FormControl>

     </form>

            <Button onClick={(event) =>
              this.handleCompleteDoctorProfile(event)}>
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


DoctorRegistrationForm = connect(mapStateToProps, mapDispatchToProps)(DoctorRegistrationForm);

export default DoctorRegistrationForm;
