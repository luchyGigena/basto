
import thunk from "redux-thunk";
import rootReducer from '../reducer/reducer';
import { legacy_createStore as createStore } from "redux";
import {applyMiddleware} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk) ) ) 

export default store;