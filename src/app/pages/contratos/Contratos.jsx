import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Icon,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import SwapHoriz from "@material-ui/icons/SwapHoriz";
import Dialog from "./Dialog";

export default function Contratos() {
  const [open, setOpen] = useState(false);
  const contratos = [
    {
      title: "Lorem ipsum dolor sit amet",
      envolvido1: "Teste",
      envolvido2: "Teste",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum sem dui. Nam id tortor eget nisi semper ultricies. Nulla cursus iaculis iaculis. Etiam eros odio, hendrerit et felis in, semper vestibulum velit. Fusce mollis at justo in finibus. Etiam eros tellus, facilisis in nulla non, condimentum pretium lectus. Suspendisse malesuada tincidunt magna, eget accumsan ex facilisis et. Phasellus vitae metus eu massa auctor porttitor nec eget ipsum. Nam porttitor rutrum nisi, a efficitur risus. Duis porta non elit eu bibendum. Morbi vehicula cursus nisi a convallis. Vestibulum magna ipsum, porttitor nec mollis in, pharetra vitae neque.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      envolvido1: "Teste",
      envolvido2: "Teste",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum sem dui. Nam id tortor eget nisi semper ultricies. Nulla cursus iaculis iaculis. Etiam eros odio, hendrerit et felis in, semper vestibulum velit. Fusce mollis at justo in finibus. Etiam eros tellus, facilisis in nulla non, condimentum pretium lectus. Suspendisse malesuada tincidunt magna, eget accumsan ex facilisis et. Phasellus vitae metus eu massa auctor porttitor nec eget ipsum. Nam porttitor rutrum nisi, a efficitur risus. Duis porta non elit eu bibendum. Morbi vehicula cursus nisi a convallis. Vestibulum magna ipsum, porttitor nec mollis in, pharetra vitae neque.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      envolvido1: "Teste",
      envolvido2: "Teste",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum sem dui. Nam id tortor eget nisi semper ultricies. Nulla cursus iaculis iaculis. Etiam eros odio, hendrerit et felis in, semper vestibulum velit. Fusce mollis at justo in finibus. Etiam eros tellus, facilisis in nulla non, condimentum pretium lectus. Suspendisse malesuada tincidunt magna, eget accumsan ex facilisis et. Phasellus vitae metus eu massa auctor porttitor nec eget ipsum. Nam porttitor rutrum nisi, a efficitur risus. Duis porta non elit eu bibendum. Morbi vehicula cursus nisi a convallis. Vestibulum magna ipsum, porttitor nec mollis in, pharetra vitae neque.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      envolvido1: "Teste",
      envolvido2: "Teste",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum sem dui. Nam id tortor eget nisi semper ultricies. Nulla cursus iaculis iaculis. Etiam eros odio, hendrerit et felis in, semper vestibulum velit. Fusce mollis at justo in finibus. Etiam eros tellus, facilisis in nulla non, condimentum pretium lectus. Suspendisse malesuada tincidunt magna, eget accumsan ex facilisis et. Phasellus vitae metus eu massa auctor porttitor nec eget ipsum. Nam porttitor rutrum nisi, a efficitur risus. Duis porta non elit eu bibendum. Morbi vehicula cursus nisi a convallis. Vestibulum magna ipsum, porttitor nec mollis in, pharetra vitae neque.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      envolvido1: "Teste",
      envolvido2: "Teste",
      descricao: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)} />
      <div className="flex w-full justify-end mb-4">
        <Button
          variant="contained"
          style={{ marginRight: "5px" }}
          color="primary"
          onClick={() => setOpen(true)}
        >
          Novo
        </Button>
      </div>
      <div className="grid grid-cols-12 gap-4 ">
        {contratos.map((item, index) => (
          <Card
            className="p8 m-2 text-center col-span-4 col-start-auto"
            key={index}
          >
            <Typography variant="h6">{item.title}</Typography>
            <CardContent>
              <Typography noWrap paragraph align="center" variant="body2">
                {item.descricao}
              </Typography>
            </CardContent>
            <CardActions className="flex justify-around">
              <p style={{ color: "#3F51B5" }}>{item.envolvido1}</p>

              <SwapHoriz />

              <p style={{ color: "green" }}>{item.envolvido2}</p>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
