import {
  Button,
  Card,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import environment from "../../environment";
import { useDispatch, useStore } from "react-redux";
import { Alert } from "@material-ui/lab";
import UserService from "./UserService";
import * as clientActions from "../../store/actions/clientActions";

export default function DialogUser(props) {
  const { onClose, open } = props;
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const store = useStore();
  const { register, handleSubmit, errors } = useForm();
  const [error, setError] = useState(false);

  const onSubmit = async (data) => {
    try {
      const newUser = await axios.post(`${environment.linkAPI}/clients`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      const gettedClients = await UserService.getAllClients(store);
      dispatch(clientActions.setClients(gettedClients));
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
            label="E-mail"
            variant="outlined"
            name="email"
            error={errors.email}
            inputRef={register({ required: true })}
          />
          <TextField
            style={{ margin: "5px auto" }}
            label="Senha"
            variant="outlined"
            type="password"
            name="password"
            error={errors.password}
            inputRef={register({ required: true })}
          />
          <TextField
            style={{ margin: "5px auto" }}
            label="Nome"
            variant="outlined"
            name="name"
            error={errors.name}
            inputRef={register({ required: true })}
          />
          <TextField
            style={{ margin: "5px auto" }}
            label="Telefone"
            variant="outlined"
            name="phone"
            error={errors.phone}
            inputRef={register({ required: true })}
          />
          <TextField
            style={{ margin: "5px auto" }}
            label="Carteira"
            variant="outlined"
            name="carteira"
            error={errors.carteira}
            inputRef={register({ required: true })}
          />
          <input
            type="number"
            ref={register({ required: true })}
            hidden
            name="roleId"
            readOnly
            value={role}
          />
          <FormControl
            error={errors.roleId}
            variant="outlined"
            style={{ margin: "5px 0" }}
          >
            <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Role"
              defaultValue={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Admin</MenuItem>
              <MenuItem value={2}>Funcionario</MenuItem>
              <MenuItem value={3}>Cliente</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" type="submit" color="primary">
            Cadastrar
          </Button>
        </form>
      </Card>
    </Dialog>
  );
}
