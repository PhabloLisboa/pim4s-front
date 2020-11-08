import * as ClientActions from "../actions/clientActions";

const Error = (
  state = {
    clients: [],
    selected: null,
  },
  action
) => {
  switch (action.type) {
    case ClientActions.SET_CLIENTS:
      return {
        ...state,
        clients: action.clients,
      };
    case ClientActions.SET_SELECTED:
      return {
        ...state,
        selected: action.selected,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Error;
