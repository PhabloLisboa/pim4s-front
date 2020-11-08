import { Button, Select, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import axios from "axios";
import { useDispatch, useStore } from "react-redux";
import dashboardService from "../../pages/dashboard/dashboardService";
import * as clientActions from "../../store/actions/clientActions";
import * as dialogActions from "../../store/actions/DialogActions";

export default function CreateForm() {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [emailsCount, setEmailsCount] = useState([" "]);
  const [phoneCount, setPhoneCount] = useState([" "]);
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = async (data) => {
    const client = await dashboardService.createClient(data, store);

    if (client) {
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
      <h4>Novo Cliente</h4>
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

        <div className=" flex justify-between mt-8">
          <div className="w-1/2 mr-2">
            <TextField
              label="Username"
              name="username"
              className="w-full"
              inputRef={register({ required: true })}
            />
          </div>
          <div className="w-1/2 ml-2">
            <TextField
              label="Senha"
              name="password"
              type="password"
              className="w-full"
              inputRef={register({ required: true })}
            />
          </div>
        </div>

        <div className="w-full">
          {emailsCount.map((item, index) => (
            <div className="w-full my-4" key={index}>
              <TextField
                label={`Email #${index + 1}`}
                name={`emails[${index}]`}
                className="w-full"
                type="email"
                inputRef={register({ required: true })}
              />
            </div>
          ))}
        </div>

        <div className="w-full items-center my-8">
          <Button
            variant="contained"
            onClick={() => setEmailsCount([...emailsCount, ""])}
          >
            Adicionar Email
          </Button>
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
              InputLabelProps={{
                shrink: watch("address.logradouro") ? true : false,
              }}
            />
          </div>
          <div className="w-1/2 ml-2">
            <TextField
              label="Cidade"
              name="address.cidade"
              className="w-full"
              inputRef={register({ required: true })}
              InputLabelProps={{
                shrink: watch("address.cidade") ? true : false,
              }}
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
              InputLabelProps={{
                shrink: watch("address.bairro") ? true : false,
              }}
            />
          </div>
          <div className="w-1/2 ml-2">
            <TextField
              label="UF"
              name="address.uf"
              className="w-full"
              inputRef={register({ required: true })}
              InputLabelProps={{
                shrink: watch("address.uf") ? true : false,
              }}
            />
          </div>
        </div>

        <div className="w-full my-4">
          <TextField
            label="Complemento"
            name="address.complemento"
            className="w-full "
            inputRef={register}
            InputLabelProps={{
              shrink: watch("address.complemento") ? true : false,
            }}
          />
        </div>

        <div className="w-full">
          {phoneCount.map((item, index) => (
            <div className="w-full flex justify-around my-4" key={index}>
              <ReactInputMask
                mask={
                  // eslint-disable-next-line
                  watch(`phones[${index}].type`) == 3
                    ? "(99) 99999-9999"
                    : "(99) 9999-9999"
                }
              >
                <TextField
                  label={`Telefone #${index + 1}`}
                  name={`phones[${index}].number`}
                  className="w-2/5"
                  inputRef={register({ required: true })}
                />
              </ReactInputMask>
              <input
                type="text"
                name={`phones[${index}].type`}
                ref={register({ required: true })}
                hidden
              />
              <Select
                className="w-2/5"
                onChange={(e) =>
                  setValue(`phones[${index}].type`, e.target.value)
                }
                displayEmpty
                label="Tipo"
              >
                <option value="1">Residencial</option>
                <option value="2">Comercial</option>
                <option value="3">Celular</option>
              </Select>
            </div>
          ))}
        </div>

        <div className="w-full items-center my-8">
          <Button
            variant="contained"
            onClick={() => setPhoneCount([...phoneCount, ""])}
          >
            Adicionar Telefone
          </Button>
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
