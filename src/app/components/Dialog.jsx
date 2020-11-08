import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as dialogActions from "../store/actions/DialogActions";
import * as errorActions from "../store/actions/errorAction";

import CreateForm from "./dialogContents/createForm";
import DeleteForm from "./dialogContents/deleteForm";
import EditForm from "./dialogContents/editForm";
import View from "./dialogContents/View";
import { Alert } from "@material-ui/lab";

export default function DialogCustom() {
  const dialog = useSelector((state) => state.Dialog);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.Error);

  return (
    <Dialog
      open={dialog.open}
      onClose={() => {
        dispatch(dialogActions.closeDialog());
        dispatch(errorActions.clearError());
      }}
      className="text-center"
    >
      <DialogContent className="flex flex-col">
        {error.hasError && (
          <Alert severity="error" className="mb-16" color="error">
            {error.message}
          </Alert>
        )}
        {dialog.typeDialog === "create" && <CreateForm />}
        {dialog.typeDialog === "edit" && <EditForm />}
        {dialog.typeDialog === "view" && <View />}
        {dialog.typeDialog === "delete" && <DeleteForm />}
      </DialogContent>
    </Dialog>
  );
}
