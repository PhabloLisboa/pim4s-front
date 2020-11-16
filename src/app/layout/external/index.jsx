import { Container } from "@material-ui/core";
import React from "react";

export default function ExternalLayout(props) {
  return (
    <Container maxWidth="xl" style={{ minHeight: "100vh" }}>
      {props.children}
    </Container>
  );
}
