import React, { useState } from "react";
import TodoInput from "../inputBox/InpputBox";
import { CardContent, Card,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "react-date-picker";

function TodoForm(props) {  
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    title: {
      flexGrow: 1,
    },
    cards: {
      minHeight: "50vh",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.cards}>
        <CardContent>
          <form
            onSubmit={(e) => {
              props.handleSubmit(e);
            }}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <TodoInput
              handleChange={(event) => {
                props.handleChange(event);
              }}
            />
            <DatePicker
              value={props.formState.date}
              onChange={(value, e) => props.handleDateChange(value, e)}
            />
            <Button variant="contained" color="secondary" type="submit" value="Submit"> Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default TodoForm;
