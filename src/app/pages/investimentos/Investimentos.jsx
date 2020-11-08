import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Icon,
} from "@material-ui/core";
import React, { useState } from "react";
import Assessment from "@material-ui/icons/Assessment";
import Gavel from "@material-ui/icons/GavelOutlined";
import Dialog from "./Dialog";

export default function Investimentos() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(Object);
  const investimentos = [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat urna a ante pretium imperdiet. Maecenas id tellus semper justo blandit ullamcorper id molestie metus.",
      value: 10.0,
      retornoEsperado: 1500,
      tempo: 1,
      crip: "Bitcoin",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat urna a ante pretium imperdiet. Maecenas id tellus semper justo blandit ullamcorper id molestie metus.",
      value: 10.0,
      retornoEsperado: 15000,
      tempo: 1,
      crip: "Bitcoin",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat urna a ante pretium imperdiet. Maecenas id tellus semper justo blandit ullamcorper id molestie metus.",
      value: 10.0,
      retornoEsperado: 15.0,
      tempo: 1,
      crip: "Bitcoin",
    },
  ];
  return (
    <>
      <Dialog
        investimento={selected}
        open={open}
        onClose={() => setOpen(false)}
      />
      <div className="flex w-full justify-end mb-4">
        <Button
          variant="contained"
          style={{ marginRight: "5px" }}
          color="primary"
        >
          Novo
        </Button>
      </div>
      {investimentos.map((item, index) => (
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
                    Retorno Esperado: ฿ {item.retornoEsperado}
                  </p>
                </div>
                <div className="ml-4">
                  <p style={{ color: "#e91e63" }}>
                    Tempo de Retenção:{item.tempo} M
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
            <Icon>
              <Gavel />
            </Icon>
          </Button>
        </Card>
      ))}
    </>
  );
}
