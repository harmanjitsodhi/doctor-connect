// import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
  mode: '',
  userType: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAVIGATE_PAGES":
      return {...state, mode: action.page};
      case "SET_USERTYPE":
      return {...state, userType: action.userType}
    default:
      return state;
  }
};




export default rootReducer;
