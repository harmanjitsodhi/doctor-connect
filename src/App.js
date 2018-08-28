import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {navPage} from './js/reducers/index';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Button from '@material-ui/core/Button';



class App extends Component {



  // submitContact(event, contact) {
  //   event.preventDefault();
  //   var self = this;
  //   axios.post('/api/addContact', contact)
  //   .then(function(response) {
  //     console.log('success!!', response);
  //   })
  // }

  let App = ({navToPage, page})

  let page;
      if(this.state.mode === "login") screen = <LoginForm app={this}/>
      else if(this.state.mode === "registration") screen = <RegistrationForm app={this}/>
      // else if(this.state.mode === "teacherDashboard") screen = <TeacherDashboard app={this}/>
      // else if(this.state.mode === "studentDashboard") screen = <StudentDashboard app={this}/>
      // else if(this.state.mode === "newQuiz") screen = <NewQuiz app={this}/>
      // else if(this.state.mode === "questions") screen = <Questions app={this}/>
      else  page =
      <div>
        <p> Get Started!</p>
        <Button style={styles.btnForDefaultPage}
                onClick={() => this.props.navToPage('login')}>Login</Button>
        <Button style={styles.btnForDefaultPage}
                onClick={() => this.props.navToPage('registration')}>Register</Button>
      </div>


    return (

      <div className="App">
        {page}
      </div>







      // <div className="App">
{/* <form>
<input type="text" value={this.state.username} placeholder="username"
onChange={(event) => this.setState({username: event.target.value})}/>
<input type="password" value={this.state.password} placeholder="password"
onChange={(event) => this.setState({password: event.target.value})}/>
<input type="submit" value="submit"
onClick={(event) => this.submitContact(event, {username: this.state.username, password: this.state.password})}/>
</form> */}

      // </div>
    );

}

const mapStateToProps = (state) => {
 return {

   page: state.mode,
 }
};

const mapDispatchToProps = (dispatch) => {
 return {
   addToArray: (article) => {
     dispatch(addArticle(article))
   },
   navToPage: (page) => {
     dispatch(navPage(page))
   },
 }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);


export default App;
