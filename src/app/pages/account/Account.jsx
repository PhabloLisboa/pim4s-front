import { Button, Card, CardMedia, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import qrCode from "../../assets/qrcode.png";
import Dialog from "./Dialog";

export default function Account() {
  const user = useSelector((state) => state.Auth.user);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("Depositar");
  const objectUser = user.funcionario || user.client;
  return (
    <div>
      <Dialog
        open={open}
        type={type}
        onClose={() => setOpen(false)}
        conta={objectUser?.conta}
        idUser={user.id}
      />
      <div className="flex w-full justify-end mb-8">
        <Button
          variant="contained"
          style={{ marginRight: "5px" }}
          color="primary"
          onClick={() => {
            setOpen(true);
            setType("Depositar");
          }}
        >
          Depositar
        </Button>
        <Button
          variant="contained"
          style={{ marginLeft: "5px" }}
          color="secondary"
          onClick={() => {
            setOpen(true);
            setType("Sacar");
          }}
        >
          Sacar
        </Button>
      </div>
      <Card className="flex">
        <img src="https://icons-for-free.com/iconfiles/png/512/lord+of+the+rings+old+man+wizard+icon-1320166692548419860.png" />
        {objectUser && (
          <div className="p-4 w-full">
            <Typography variant="h4">{objectUser.name}</Typography>
            <Typography variant="subtitle1">{user.email}</Typography>
            <Typography variant="subtitle2">Telefone: {user.phone}</Typography>
            <div className="mt-8">
              <img src={qrCode} alt="" />
              <p className="w-full">Carteira: {user.client.conta.carteira}</p>
            </div>
            <div className="mt-8">
              <Typography variant="h4">
                Saldo: ฿ {objectUser.conta.saldo}
              </Typography>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
