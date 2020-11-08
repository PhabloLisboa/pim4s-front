import React from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import Create from "@material-ui/icons/Create";
import Visibility from "@material-ui/icons/Visibility";
import Delete from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import * as dialogActions from "../store/actions/DialogActions";
import StringMask from "string-mask";

export default function TableClients() {
  const dispatch = useDispatch();
  let cpfFormatter = new StringMask("000.000.000-00");
  const clients = useSelector((state) => state.Client.clients);
  const user = useSelector((state) => state.Auth.user);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <strong>Nome</strong>
            </TableCell>
            <TableCell align="center">
              <strong>E-mail Principal</strong>
            </TableCell>
            <TableCell align="center">
              <strong>CPF</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Ações</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client, index) => (
            <TableRow key={client.name}>
              <TableCell component="th" scope="row">
                {client.name}
              </TableCell>
              <TableCell align="center">{client.emails[0].email}</TableCell>
              <TableCell align="center">
                {cpfFormatter.apply(client.cpf)}
              </TableCell>
              <TableCell align="center">
                {user && user.role.description === "Administrador" && (
                  <IconButton
                    onClick={() =>
                      dispatch(dialogActions.openDialog("edit", client))
                    }
                  >
                    <Create />
                  </IconButton>
                )}
                <IconButton
                  onClick={() =>
                    dispatch(dialogActions.openDialog("view", client))
                  }
                >
                  <Visibility />
                </IconButton>
                {user && user.role.description === "Administrador" && (
                  <IconButton
                    onClick={() =>
                      dispatch(dialogActions.openDialog("delete", client))
                    }
                  >
                    <Delete />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
