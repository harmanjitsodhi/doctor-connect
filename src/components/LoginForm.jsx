import React, { Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import axios from "axios";
import {navPage} from '../js/actions/index';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleLogin(event, username, password) {
    event.preventDefault();
    console.log('my username:', username, "my password:", password);
    axios.post('/api/login', {username, password})
    .then(function(response) {
      console.log('successful login!!', response);
    })
  }

  render() {
    return (
      <div >
          <TextField type="text" label="Username" value={this.state.username}
            onChange={(e) => this.setState({username: e.target.value})} />
            <br/>
          <TextField type="password" label="Password" value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})} />
            <br/>
          <Button onClick={(event) => this.handleLogin(event, this.state.username, this.state.password)}>Login</Button><br/>
          <Button onClick={() => this.props.navToPage('registration')}>Don't have an account yet?</Button><br/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 return {
   mode: state.mode,
 }
};

const mapDispatchToProps = (dispatch) => {
 return {
   navToPage: (mode) => {
     dispatch(navPage(mode))
   },
 }
}

LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);


export default LoginForm;
