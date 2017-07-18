import { combineReducers } from 'redux';
import nav from "./reducers/nav";

const AppReducer = combineReducers({
  nav,
});

export default AppReducer;
