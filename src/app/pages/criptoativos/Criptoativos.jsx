import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Dialog from "./Dialog";
import CriptoService from "./CriptoService";
import * as criptoActions from "../../store/actions/CriptoActions";
import { useDispatch, useSelector, useStore } from "react-redux";
import Visibility from "@material-ui/icons/Visibility";

export default function Criptoativos() {
  const cripto = [];
  const [open, setOpen] = useState(false);
  const store = useStore();
  const dispatch = useDispatch();
  const criptos = useSelector((state) => state.Cripto.criptos);

  useEffect(() => {
    (async () => {
      const criptosGetted = await CriptoService.getAllCriptos(store);
      dispatch(criptoActions.setCriptos(criptosGetted));
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)} />
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
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <strong>Criptoativo</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Cotação</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {criptos.map((cripto, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <span>{cripto.name}</span>
                </TableCell>
                <TableCell component="th" scope="row">
                  <span>{cripto.cotacao}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
