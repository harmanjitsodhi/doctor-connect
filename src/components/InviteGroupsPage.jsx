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
import {filterByList} from '../specialtiesSRC';
import GroupNavBar from './GroupNavBar';





class InviteGroupsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupsList: [],
      items: [],
    }
  }

  componentDidMount() {
    axios.get('/api/getGroups')

    .then((response) =>  {
      response.data.map(group => {
        for (var i = 0; i < this.props.userProfile.following.length; i++) {
          if (this.props.userProfile.following[i] == group._id || group._id == this.props.userProfile._id) {
            return
          }
        }
        this.setState({groupsList: [...this.state.groupsList, group], items:[...this.state.items, group.name, group.about]})
      })
    })
  };

  handleFollowGroups(id) {

    axios.post('/api/followGroup',
    {
      userId: this.props.userProfile._id,
      groupId: [id]
    })
    .then((response) => {
      this.props.setProfile(response)
    })
  };


  filterList(event){
      var updatedList = [];
      this.state.groupsList.map(group =>
        updatedList.push(group.name, group.about))
        console.log("updatedList", updatedList);
      updatedList = updatedList.filter(function(item){
        return item.toString().toLowerCase().search(
          event.target.value.toString().toLowerCase()) !== -1;
      });
       this.setState({items: updatedList})

     }

     render() {
         console.log("new items", this.state.items)

         return (
           <div style={center}>
             In my invite Groups page!
             <GroupNavBar/>

             <div className="filter-list">
                     <form>
                     <fieldset className="form-group">
                     <input type="text" placeholder="Search" onChange={(event)=> this.filterList(event)}/>
                     </fieldset>
                     </form>
                     <ul >
             {this.state.items.map((item) => {
                 return <li data-category={item} >{item}</li>
               })}
             </ul>
                   </div>




           <div>
             {this.state.groupsList.map(group =>
               <div>
                 <div>

               <div>name: {group.name} </div>
               <div>about: {group.about}</div>
               <div>interests: {group.interest[0]} {group.interest[1]} {group.interest[2]} </div>
               <div>email: {group.email} </div>
             </div>
               <Button
                   onClick={()=> this.handleFollowGroups(group._id)}>Follow</Button>
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
   setProfile: (profile) => {
     dispatch({type: 'SET_PROFILE', profile: profile})
   }
 }
}
const center = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  width: "100%",
  height: "100%",
}

InviteGroupsPage = connect(mapStateToProps, mapDispatchToProps)(InviteGroupsPage);

export default InviteGroupsPage;
