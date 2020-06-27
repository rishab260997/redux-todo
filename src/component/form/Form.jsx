import React, { useState } from "react";
import TodoInput from "../inputBox/InpputBox";
import SubmitButton from "../submitButton/SubmitButton";
// import { useState } from 'react';
import { CardContent, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "react-date-picker";

function TodoForm(props) {
  // const [formState, changeFormStates] = useState({
  //   title: "",
  //   date: new Date(),
  //   todoItem: [],
  // });


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!props.formState.title == "") {
  //     let todo = {
  //       id: Math.random(),
  //       todo: props.formState.title,
  //       completed: false,
  //       dates: props.formState.date.toLocaleDateString(),
  //     };
  //     props.changeFormStates({
  //       ...props.formState,
  //       todoItem: [...props.formState.todoItem, todo],
  //     });
  //   }
  //   changeFormStates({...props.formState, title: ""});
  // };

  // const handleChange = (event) => {
  //   changeFormStates({ ...props.formState, title: event.target.value });
  // };

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
            onSubmit={(e) =>{props.handleSubmit(e)}}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <TodoInput
              handleChange={(event) => {
                handleChange(event);
              }}
            />
            <DatePicker
              value={props.formState.date}
              onChange={() => changeFormStates(props.formState.date)}
            />
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default TodoForm;
