import { Button, Card, Dialog, TextField } from "@material-ui/core";
import React from "react";

export default function DialogContr(props) {
  const { open, onClose } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <Card className="p-8">
        <form action="" className="flex flex-col justify-around">
          <TextField
            style={{ margin: "5px auto" }}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            name="returnedValue"
          />
          <TextField
            style={{ margin: "5px auto" }}
            id="outlined-basic"
            label="Descrição"
            variant="outlined"
            name="returnedValue"
          />
          <TextField
            style={{ margin: "5px auto" }}
            id="outlined-basic"
            label="Envolvido 1"
            variant="outlined"
            name="returnedValue"
          />

          <TextField
            style={{ margin: "5px auto" }}
            id="outlined-basic"
            label="Envolvido 2"
            variant="outlined"
            name="returnedValue"
          />
          <Button variant="contained" color="primary">
            Finalizar
          </Button>
        </form>
      </Card>
    </Dialog>
  );
}
