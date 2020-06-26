import React, { useState } from "react";
import TodoInput from "../inputBox/InpputBox";
import SubmitButton from "../submitButton/SubmitButton";
// import { useState } from 'react';
import { CardContent, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "react-date-picker";

function TodoForm() {
  // const [title, setTitle] = useState("");
  const [todoItem, setTodoItem] = useState([]);
  // const [date, setDate] = useState(new Date());
  const [formState, changeFormStates] = useState({title: "", date: new Date()})


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.title == "") {
      let todo = {
        id: Math.random(),
        todo: formState.title,
        completed: false,
        // dates: date.toLocaleDateString(),
      };
      setTodoItem([...todoItem, todo]);
    }
    console.log(todoItem,"rrrrrrrrrrrrrrrrrrrr"); 
    // setTitle("");
  };

  const handleChange = (event) => {
    // setTitle(event.target.value);
    changeFormStates({...formState, title :  event.target.value})
  };

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
            onSubmit={handleSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <TodoInput
              handleChange={(event) => {
                handleChange(event);
              }}
            />
            <DatePicker value={formState.date} onChange={ () =>  changeFormStates(formState.date)} />
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default TodoForm;
