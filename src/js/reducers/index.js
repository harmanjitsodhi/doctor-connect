// import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
  mode: '',
  userType: '',
  userId: '',
  userProfile: {},
  event: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAVIGATE_PAGES":
      return {...state, mode: action.page};
    case "SET_USERTYPE":
      return {...state, userType: action.userType};
    case "SET_USERID":
      return {...state, userId: action.userId};
    case "SET_PROFILE":
      return {...state, userProfile: action.profile};
    case "SET_EVENT":
      return {...state, event: action.event};
    default:
      return state;
  }
};




export default rootReducer;
