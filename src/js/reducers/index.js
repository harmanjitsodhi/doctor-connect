// import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
  mode: '',

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAVIGATE_PAGES":
      return {...state, mode: action.page};

    default:
      return state;
  }
};




export default rootReducer;
