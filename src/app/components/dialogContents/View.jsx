import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import StringMask from "string-mask";

export default function View() {
  const client = useSelector((state) => state.Dialog.data);
  let cepFormatter = new StringMask("00.000-000");
  let phone1Formatter = new StringMask("(00) 00000-0000");
  let phone2Formatter = new StringMask("(00) 0000-0000");
  let cpfFormatter = new StringMask("000.000.000-00");

  return (
    <>
      <div className="w-full my-4">
        <Typography variant="h4">
          <strong>{client.name}</strong>
        </Typography>
      </div>

      <div className="w-full my-4">
        <Typography variant="subtitle1">
          CPF: {cpfFormatter.apply(client.cpf)}
        </Typography>
      </div>

      {client.emails.map((item, index) => (
        <div className="w-full my-4" key={index}>
          <Typography variant="subtitle1">
            Email#{index + 1}: {item.email}
          </Typography>
        </div>
      ))}

      {client.phones.map((item, index) => (
        <div className="w-full my-4" key={index}>
          Telefone #{index + 1}:{" "}
          {item.number.length === 11 ? (
            <Typography variant="subtitle1">
              {phone1Formatter.apply(item.number)}
            </Typography>
          ) : (
            <Typography variant="subtitle1">
              {phone2Formatter.apply(item.number)}
            </Typography>
          )}
        </div>
      ))}

      <div className="w-full my-4">
        CEP :{" "}
        <Typography variant="subtitle1">
          {cepFormatter.apply(client.address.cep)}
        </Typography>
      </div>

      <div className=" flex justify-between mt-8">
        <div className="w-1/2 mr-2">
          <Typography variant="subtitle1">
            Logradouro : {client.address.logradouro}
          </Typography>
        </div>
        <div className="w-1/2 ml-2">
          Bairro :{" "}
          <Typography variant="subtitle1">{client.address.bairro}</Typography>
        </div>
      </div>

      <div className=" flex justify-between mt-8">
        <div className={client.address.complemento ? "w-1/2 mr-2" : "w-full"}>
          Cidade :{" "}
          <Typography variant="subtitle1">{client.address.cidade}</Typography>
        </div>
        {client.address.complemento && (
          <div className="w-1/2 ml-2">
            <Typography variant="subtitle1">
              Complemento : {client.address.complemento}
            </Typography>
          </div>
        )}
      </div>
    </>
  );
}
