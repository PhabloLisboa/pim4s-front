import * as CriptoActions from "../actions/CriptoActions";

const Error = (
  state = {
    criptos: [],
  },
  action
) => {
  switch (action.type) {
    case CriptoActions.SET_CRIPTOS:
      return {
        ...state,
        criptos: action.criptos,
      };

    default:
      return {
        ...state,
      };
  }
};

export default Error;
