import * as AuthActions from "../actions/authAction";

const Auth = (
  state = {
    token: null,
    logged: localStorage.getItem("token") ? true : false,
    user: {},
  },
  action
) => {
  switch (action.type) {
    case AuthActions.LOGIN:
      return {
        ...state,
        token: action.token,
        user: action.user,
        logged: true,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        token: action.token,
        logged: false,
      };
    case AuthActions.SET_USER_DATA:
      return {
        ...state,
        user: action.user,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Auth;
