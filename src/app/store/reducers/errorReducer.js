import * as ErrorActions from "../actions/errorAction";

const Error = (
  state = {
    message: "",
    hasError: false,
  },
  action
) => {
  switch (action.type) {
    case ErrorActions.ERROR:
      return {
        ...state,
        message: action.message,
        hasError: action.hasError,
      };
    case ErrorActions.CLEAR_ERROR:
      return {
        ...state,
        message: action.message,
        hasError: action.hasError,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Error;
