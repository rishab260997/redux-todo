import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function TodoInput(props) {
  const useStyles = makeStyles((theme) => ({
    boxs: {
      display: "inline-block",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.boxs}>
      <TextField
        id="standard-basic"
        label="Todo...."
        value={props.title}
        onChange={(event) => {
          props.handleChange(event);
        }}
      />
    </div>
  );
}
export default TodoInput;
