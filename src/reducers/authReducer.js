import { LOGIN_BEGIN, LOGIN_SUCCESS } from '../actions';

let authReducer = function(state={'user': {}}, action) {
  switch (action.type) {
    case LOGIN_BEGIN:
      return Object.assign({}, state, {
        "isLoggingIn": true
      });
    break;
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        "isLoggingIn": false,
        "user": action.user,
        "token": action.token
      });
    break;
  }
  return state;
}

export default authReducer;
