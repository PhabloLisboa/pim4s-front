import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import dashboardService from "../../pages/dashboard/dashboardService";
import * as clientActions from "../../store/actions/clientActions";
import * as dialogActions from "../../store/actions/DialogActions";

export default function DeleteForm() {
  const client = useSelector((state) => state.Dialog.data);
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data) => {
    (async () => {
      const c = await dashboardService.deleteClient(client.id, store);
      if (c) {
        const gettedClients = await dashboardService.getAllClients(store);
        dispatch(clientActions.setClients(gettedClients));
        dispatch(dialogActions.closeDialog());
      }
    })();
  };

  return (
    <>
      <strong>
        <h2>Remover Cliente</h2>
      </strong>
      <Typography variant="subtitle1">
        Tem certeza que desejá remover <strong>{client.name}</strong>
      </Typography>
      <div className="w-full flex justify-around my-8">
        <Button variant="contained" color="primary">
          Cancelar
        </Button>
        <Button variant="contained" color="secondary" onClick={onSubmit}>
          Remover
        </Button>
      </div>
    </>
  );
}
