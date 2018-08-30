import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {navPage} from '../js/actions/index';
import axios from "axios";





class MyEventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsList: [],
    }
  }

  componentDidMount() {
    axios.post('/api/getEvents',
    {eventHost: this.props.userProfile._id,

    })
    .then((response) =>  {
      response.data.map(event => {
        this.setState({eventsList: [...this.state.eventsList, event.title]})
      })
    })
  };

      handleGetEventInformation() {
        console.log("doesnt have afunction yet!")
      }


  render() {
    return (
      <div>
        In my events listed page!
        <div>
        {this.state.eventsList}
      </div>

        {/* {this.state.eventsList.map(event =>
            <Button
              onClick={()=> this.handleGetEventInformation()}>{event.title}</Button>)}<br/> */}

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

MyEventsPage = connect(mapStateToProps, mapDispatchToProps)(MyEventsPage);

export default MyEventsPage;
