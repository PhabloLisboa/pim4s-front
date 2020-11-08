export const OPEN_DIALOG = "OPEN_DIALOG";
export const CLOSE_DIALOG = "CLOSE_DIALOG";

export function openDialog(type, data = null) {
  return {
    open: true,
    typeDialog: type,
    data,
    type: OPEN_DIALOG,
  };
}

export function closeDialog() {
  return {
    open: false,
    type: CLOSE_DIALOG,
  };
}
