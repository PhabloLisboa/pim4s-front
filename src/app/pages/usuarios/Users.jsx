import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import Dialog from "../../components/Dialog";
import UserService from "./UserService";
import { useDispatch, useStore } from "react-redux";
import * as clientActions from "../../store/actions/clientActions";
import { Button } from "@material-ui/core";
import DialogUser from "./DialogUser";

export default function Users() {
  const dispatch = useDispatch();
  const store = useStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const gettedClients = await UserService.getAllClients(store);
      dispatch(clientActions.setClients(gettedClients));
    })();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="pt-8">
      <DialogUser open={open} onClose={() => setOpen(false)} />
      <div className="flex w-full justify-end mb-4">
        <Button
          variant="contained"
          style={{ marginRight: "5px" }}
          color="primary"
          onClick={() => setOpen(true)}
        >
          Novo
        </Button>
      </div>
      <Dialog />
      <Table />
    </div>
  );
}
