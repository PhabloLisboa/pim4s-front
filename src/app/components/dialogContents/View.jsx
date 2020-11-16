import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import StringMask from "string-mask";

export default function View() {
  const user = useSelector((state) => state.Dialog.data);
  let phone1Formatter = new StringMask("(00) 00000-0000");

  return (
    <>
      <div className="w-full my-4">
        <Typography variant="h4">
          <strong>{user.client.name}</strong>
        </Typography>
      </div>

      <div className="w-full my-4">
        <Typography variant="subtitle1">Email: {user.email}</Typography>
      </div>

      <div className="w-full my-4">
        <Typography variant="subtitle1">
          Role: {user.role.description}
        </Typography>
      </div>
      <Typography variant="subtitle1">
        Telefone: {phone1Formatter.apply(user.phone)}
      </Typography>
    </>
  );
}
