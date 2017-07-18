import { combineReducers } from 'redux';
import AppNavigator from '../../navigation';

// setup the initial screen that react-navigation should use
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const initialNavState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getStateForAction(firstAction)
);

const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default nav
