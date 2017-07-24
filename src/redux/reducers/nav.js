import { combineReducers } from 'redux'
import AppNavigator from '../../navigation'

// setup the initial screen that react-navigation should use
const firstAction = AppNavigator.router.getActionForPathAndParams('Main')
const initialNavState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getStateForAction(firstAction)
)

const nav = (state = initialNavState, action) => {
  let nextState
  switch (action.type) {
    // case 'Navigation/BACK': {
    //   console.log('BACK!!!!!!!!!!!!!!');
    //   let backRouteIndex = null;
    //   if (action.key) {
    //     const backRoute = state.routes.find(route => route.routeName === action.key);
    //     console.log('back');
    //     backRouteIndex = state.routes.indexOf(backRoute);
    //   }
    //   if (backRouteIndex == null) {
    //     return StateUtils.pop(state);
    //   }
    //   if (backRouteIndex > 0) {
    //     return {
    //       ...state,
    //       routes: state.routes.slice(0, backRouteIndex),
    //       index: backRouteIndex - 1,
    //     };
    //   }
    //
    // }

    default:
      nextState = AppNavigator.router.getStateForAction(action, state)
      break
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}

export default nav
