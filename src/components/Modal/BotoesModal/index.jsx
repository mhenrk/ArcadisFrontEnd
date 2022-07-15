import React from "react";
import { Container } from "./styles";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export const BotaoRetangular = (props) => {
  return (
    <Container>
      <button onClick={props.btnOnClick}>
        {props.btnModalName}
      </button>
    </Container>
  );
};

export const BotaoCircular = (props) => {
  return (
    <Fab 
      onClick={props.onClick} 
      size="small"
      color="primary" 
      aria-label="add">
      <AddIcon />
    </Fab>
  );
};

export const BotaoSubmit = (props) => {
  return (
    <Container>
      <button type="submit">
        {props.btnModalName}
      </button>
    </Container>
  )
}

export const BtnParams = (props) => {
  return (
    <Fab 
      onClick={props.onClick} 
      size="small"
      color="primary" 
      aria-label="add">
      <AddIcon />
    </Fab>
  );
};