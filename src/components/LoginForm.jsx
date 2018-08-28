import React, { Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',

    }
  }

  handleLogin() {
    console.log('my username:', this.state.username, "my password:", this.state.password);

  }

  render() {
    return (
      <div >
          <TextField type="text" label="Username" value={this.state.username}
            onChange={(e) => this.setState({username: e.target.value})}/><br/>
          <TextField type="password" label="Password" value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})}/><br/>
          <Button onClick={() => this.handleLogin()}>Login</Button><br/>
          <Button onClick={() => this.props.navToPage('registration')}>Don't have an account yet?</Button><br/>
      </div>
    );
  }
}


export default LoginForm;
