import React, { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Redirect } from "react-router-dom";
import Table from "../../components/Table";
import Dialog from "../../components/Dialog";
import { Button } from "@material-ui/core";
import dashboardService from "./dashboardService";
import * as dialogActions from "../../store/actions/DialogActions";
import * as clientActions from "../../store/actions/clientActions";

export default function Dashboard(props) {
  const logged = useSelector((state) => state.Auth.logged);
  const dispatch = useDispatch();
  const store = useStore();
  const user = useSelector((state) => state.Auth.user);

  useEffect(() => {
    (async () => {
      const gettedClients = await dashboardService.getAllClients(store);
      dispatch(clientActions.setClients(gettedClients));
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="pt-8">
      {!localStorage.getItem("token") && <Redirect to="/" />}
      teste
      <Dialog />
      <Table />
    </div>
  );
}
