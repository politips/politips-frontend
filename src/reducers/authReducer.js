import { LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../actions';

let authReducer = function(state={'user': null}, action) {
  switch (action.type) {
    case LOGIN_BEGIN:
      return Object.assign({}, state, {
        "isLoggingIn": true
      });
    break;
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        "isLoggingIn": false,
        "loginErrorData": action.loginErrorData
      });
    break;
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        "isLoggingIn": false,
        "user": action.user,
        "token": action.token
      });
    break;
    case LOGOUT:
      return Object.assign({}, state, {
        "user": null,
        "token": null
      });
  }
  return state;
}

export default authReducer;
