let authReducer = function(state={'user': {}}, action) {
  switch (action.type) {
    case 'BEGIN_LOGIN':
      console.log("beginning log in");
      return Object.assign({}, state, {
        "isLoggingIn": true
      });
    break;
  }
  return state;
}

export default authReducer;
