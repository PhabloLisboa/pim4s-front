import { Button, Card, Dialog, TextField } from "@material-ui/core";
import React from "react";

export default function DialogInvest(props) {
  const { investimento, open, onClose } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <Card className="p-8">
        <form action="" className="flex flex-col justify-around">
          <TextField
            style={{ margin: "5px auto" }}
            id="outlined-basic"
            label="Valor retornado"
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
