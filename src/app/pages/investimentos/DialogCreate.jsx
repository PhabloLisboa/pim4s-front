import { Button, Card, Dialog, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, useStore } from "react-redux";
import axios from "axios";
import environment from "../../environment";
import UserService from "../usuarios/UserService";
import * as clientActions from "../../store/actions/clientActions";

export default function DialogCreate(props) {
  const { open, onClose } = props;
  const { register, handleSubmit } = useForm();
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = async (data) => {
    onClose();
    await axios.post(`${environment.linkAPI}/investimentos`, data);

    const gettedClients = await UserService.getInvestimentos(user.id, store);
    dispatch(
      clientActions.setInvestimentos(gettedClients.client?.investiments)
    );
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <Card className="p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-around"
        >
          <TextField
            style={{ margin: "5px auto" }}
            id="outlined-basic"
            label="Valor de depósito"
            variant="outlined"
            name="value"
            inputRef={register({ required: true })}
          />
          <TextField
            style={{ margin: "5px auto" }}
            id="outlined-basic"
            label="Retorno esperado"
            variant="outlined"
            name="returnSpectValue"
            inputRef={register({ required: true })}
          />
          <TextField
            style={{ margin: "5px auto" }}
            id="outlined-basic"
            label="Tempo de retenção em Meses"
            variant="outlined"
            name="time"
            inputRef={register({ required: true })}
          />

          <TextField
            style={{ margin: "5px auto" }}
            id="outlined-basic"
            label="Descrição"
            variant="outlined"
            name="description"
            inputRef={register({ required: true })}
          />

          <input
            readOnly
            ref={register({ required: true })}
            type="text"
            hidden
            name="clientId"
            value={user.client?.id}
          />
          <Button type="submit" variant="contained" color="primary">
            Investir
          </Button>
        </form>
      </Card>
    </Dialog>
  );
}
