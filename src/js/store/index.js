import { createStore } from "redux";
import rootReducer from "../reducers/index";
import ReactDOM from 'react-dom';
import App from '../../App'
import {Provider} from 'react-redux';

let store = createStore(rootReducer);

// export default store;

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementByID("root"));
