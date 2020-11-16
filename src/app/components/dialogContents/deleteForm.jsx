import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import dashboardService from "../../pages/dashboard/dashboardService";
import UserService from "../../pages/usuarios/UserService";
import * as clientActions from "../../store/actions/clientActions";
import * as dialogActions from "../../store/actions/DialogActions";
import axios from "axios";
import environment from "../../environment";

export default function DeleteForm() {
  const client = useSelector((state) => state.Dialog.data);
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = async (_) => {
    await axios.get(`${environment.linkAPI}/users/delete/${client.id}`);
    const gettedClients = await UserService.getAllClients(store);

    console.log(`${environment.linkAPI}/users/delete/${client.id}`);

    console.log(gettedClients);

    dispatch(clientActions.setClients(gettedClients));
    dispatch(dialogActions.closeDialog());
  };

  return (
    <>
      <strong>
        <h2>Remover Cliente</h2>
      </strong>
      <Typography variant="subtitle1">
        Tem certeza que desejá remover <strong>{client.client.name}</strong>
      </Typography>
      <div className="w-full flex justify-around my-8">
        <Button
          onClick={() => dispatch(dialogActions.closeDialog())}
          variant="contained"
          color="primary"
        >
          Cancelar
        </Button>
        <Button variant="contained" color="secondary" onClick={onSubmit}>
          Remover
        </Button>
      </div>
    </>
  );
}
