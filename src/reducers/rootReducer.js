import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import { persistWrapper } from "redux-easy-persist";
export default combineReducers(persistWrapper({
 simpleReducer
}));