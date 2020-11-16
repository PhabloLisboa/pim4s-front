import { Button, Card, Dialog, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import environment from "../../environment";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../../store/actions/authAction";

export default function DialogAccount(props) {
  const { type, onClose, open, conta, idUser } = props;
  const { register, handleSubmit } = useForm();
  const disptch = useDispatch();

  const onSubmit = async (data) => {
    await axios.get(
      `${environment.linkAPI}/contas/${conta.id}/${type.toLowerCase()}/${
        data.value
      }`
    );

    const user = await axios.get(`${environment.linkAPI}/users/${idUser}`);

    disptch(authActions.setUserData(user.data));

    onClose();
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
            label="Valor ฿"
            inputRef={register({ required: true })}
            variant="outlined"
            name="value"
          />
          <Button
            variant="contained"
            type="submit"
            color={type === "Depositar" ? "primary" : "secondary"}
          >
            {type === "Sacar" && "Sacar"}
            {type === "Depositar" && "Depositar"}
          </Button>
        </form>
      </Card>
    </Dialog>
  );
}
