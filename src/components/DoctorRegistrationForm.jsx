import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import specialties from '../specialtiesSRC';

class DoctorRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorName: '',
      occupation: '',
      doctorEmail: '',
      open: false,

    }
  }
  handleCompleteProfile(event) {
  console.log("doctor profile complete!");
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

        <form autoComplete="off">
       {/* <Button onClick={this.handleOpen}>
         Open the select
       </Button> */}
       <FormControl>
         <InputLabel htmlFor="demo-controlled-open-select">Occupation</InputLabel>
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

            <Button onClick={(event) =>
              this.handleCompleteProfile(event)}>
              Complete Profile!</Button><br/>

          </form>
          </Paper>
      </div>
    );
  }
}

export default DoctorRegistrationForm;
