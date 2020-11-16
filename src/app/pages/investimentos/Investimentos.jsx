import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Icon,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Assessment from "@material-ui/icons/Assessment";
import Gavel from "@material-ui/icons/GavelOutlined";
import Dialog from "./Dialog";
import DialogCreate from "./DialogCreate";
import { useDispatch, useSelector, useStore } from "react-redux";
import UserService from "../usuarios/UserService";
import * as clientActions from "../../store/actions/clientActions";

export default function Investimentos() {
  const [open, setOpen] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [selected, setSelected] = useState(Object);
  const store = useStore();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth.user);
  const investiments = useSelector((state) => state.Client.inventimentos);

  useEffect(() => {
    (async () => {
      const gettedClients = await UserService.getInvestimentos(user.id, store);
      console.log();
      dispatch(
        clientActions.setInvestimentos(gettedClients.client?.investiments)
      );
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Dialog
        investimento={selected}
        open={open}
        onClose={() => setOpen(false)}
      />
      <DialogCreate open={openCreate} onClose={() => setOpenCreate(false)} />
      <div className="flex w-full justify-end mb-4">
        <Button
          variant="contained"
          style={{ marginRight: "5px" }}
          color="primary"
          onClick={() => setOpenCreate(true)}
        >
          Novo
        </Button>
      </div>
      {investiments &&
        investiments.map((item, index) => (
          <Card className="w-full flex p-8 my-4" key={index}>
            <div>
              <Icon>
                <Assessment />
              </Icon>
            </div>

            <CardActionArea className="ml-4">
              <CardContent>
                <h1>{item.description}</h1>
                <div className="flex mt-2">
                  <div>
                    <p style={{ color: "green" }}>Investido: ฿ {item.value}</p>
                  </div>
                  <div className="ml-4">
                    <p style={{ color: "#3F51B5" }}>
                      Retorno Esperado: ฿ {item.returnSpectValue}
                    </p>
                  </div>
                  <div className="ml-4">
                    <p style={{ color: "#e91e63" }}>
                      Tempo de Retenção:{item.time} M
                    </p>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
            <Button
              onClick={() => {
                setSelected(item);
                setOpen(true);
              }}
              title="Finalizar"
            >
              <Gavel />
            </Button>
          </Card>
        ))}
    </>
  );
}
