import { Button, Card, Dialog, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import environment from "../../environment";
import CriptoService from "./CriptoService";
import axios from "axios";
import * as criptoActions from "../../store/actions/CriptoActions";

import { useDispatch, useStore } from "react-redux";
import { Alert } from "@material-ui/lab";

export default function DialogContr(props) {
  const { open, onClose } = props;
  const { register, handleSubmit } = useForm();
  const store = useStore();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const onSubmit = async (data) => {
    try {
      const newCripto = await axios.post(
        `${environment.linkAPI}/criptos`,
        data,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      const gettedCripto = await CriptoService.getAllCriptos(store);
      dispatch(criptoActions.setCriptos(gettedCripto));
      onClose();

      setError(false);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <Card className="p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-around"
        >
          {error && (
            <Alert variant="filled" className="my-4" severity="error">
              Erro ao cadastrar
            </Alert>
          )}
          <TextField
            style={{ margin: "5px auto" }}
            id="outlined-basic"
            label="Nome"
            inputRef={register({ required: true })}
            variant="outlined"
            name="name"
          />
          <TextField
            style={{ margin: "5px auto" }}
            id="outlined-basic"
            label="Cotação"
            inputRef={register({ required: true })}
            variant="outlined"
            name="cotacao"
          />

          <Button variant="contained" type="submit" color="primary">
            Finalizar
          </Button>
        </form>
      </Card>
    </Dialog>
  );
}
