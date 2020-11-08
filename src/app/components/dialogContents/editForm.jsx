import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { useDispatch, useSelector, useStore } from "react-redux";
import axios from "axios";
import dashboardService from "../../pages/dashboard/dashboardService";
import * as clientActions from "../../store/actions/clientActions";
import * as dialogActions from "../../store/actions/DialogActions";

export default function EditForm() {
  const client = useSelector((state) => state.Dialog.data);
  const dispatch = useDispatch();
  const store = useStore();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: client.name || "",
      cpf: client.cpf || "",
      username: client.user?.username || "",
      address: {
        cep: client.address?.cep || "",
        logradouro: client.address?.logradouro || "",
        cidade: client.address?.cidade || "",
        bairro: client.address?.bairro || "",
        uf: client.address?.uf || "",
        complemento: client.address?.complemento || "",
      },
    },
  });
  const onSubmit = async (data) => {
    const c = await dashboardService.updateClient(data, client.id, store);

    if (c) {
      const gettedClients = await dashboardService.getAllClients(store);
      dispatch(clientActions.setClients(gettedClients));
      dispatch(dialogActions.closeDialog());
    }
  };

  const getAddress = (e) => {
    let cep = e.target.value;
    if (cep.length === 10 && !cep.includes("_")) {
      cep = cep.replace(".", "").replace("-", "");

      axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((resp) => {
        setValue("address.logradouro", resp.data.logradouro);
        setValue("address.cidade", resp.data.localidade);
        setValue("address.bairro", resp.data.bairro);
        setValue("address.uf", resp.data.uf);
        setValue("address.complemento", resp.data.complemento);
      });
    }
  };

  return (
    <>
      <h4>Atualizar Cliente</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full my-4">
          <TextField
            label="Nome"
            name="name"
            className="w-full "
            inputRef={register({ required: true })}
          />
        </div>

        <div className="w-full my-4">
          <ReactInputMask mask="999.999.999-99">
            <TextField
              label="CPF"
              name="cpf"
              className="w-full "
              inputRef={register({ required: true })}
            />
          </ReactInputMask>
        </div>

        <div className="w-full mr-2">
          <TextField
            label="Username"
            name="username"
            className="w-full"
            inputRef={register({ required: true })}
          />
        </div>

        <div className="w-full my-4">
          <ReactInputMask mask="99.999-999" onChange={getAddress}>
            <TextField
              label="CEP"
              name="address.cep"
              className="w-full "
              inputRef={register({ required: true })}
            />
          </ReactInputMask>
        </div>

        <div className=" flex justify-between mt-8">
          <div className="w-1/2 mr-2">
            <TextField
              label="Logradouro"
              name="address.logradouro"
              className="w-full"
              inputRef={register({ required: true })}
            />
          </div>
          <div className="w-1/2 ml-2">
            <TextField
              label="Cidade"
              name="address.cidade"
              className="w-full"
              inputRef={register({ required: true })}
            />
          </div>
        </div>

        <div className=" flex justify-between mt-8">
          <div className="w-1/2 mr-2">
            <TextField
              label="Bairro"
              name="address.bairro"
              className="w-full"
              inputRef={register({ required: true })}
            />
          </div>
          <div className="w-1/2 ml-2">
            <TextField
              label="UF"
              name="address.uf"
              className="w-full"
              inputRef={register({ required: true })}
            />
          </div>
        </div>

        <div className="w-full my-4">
          <TextField
            label="Complemento"
            name="address.complemento"
            className="w-full "
            inputRef={register}
          />
        </div>

        <div className="w-full items-center my-8">
          <Button variant="contained" color="primary" type="submit">
            Cadastrar
          </Button>
        </div>
      </form>
    </>
  );
}
