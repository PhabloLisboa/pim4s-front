import * as AuthActions from "../actions/DialogActions";

const Dialog = (
  state = {
    open: false,
    typeDialog: "create",
    data: null,
  },
  action
) => {
  switch (action.type) {
    case AuthActions.OPEN_DIALOG:
      return {
        ...state,
        open: action.open,
        typeDialog: action.typeDialog,
        data: action.data,
      };
    case AuthActions.CLOSE_DIALOG:
      return {
        ...state,
        open: action.open,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Dialog;
