import React, {useState} from 'react';
import TodoInput from '../inputBox/InpputBox';
import SubmitButton from '../submitButton/SubmitButton';
// import { useState } from 'react';
import { CardContent, Card, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "react-date-picker";



function TodoForm () {
    const [title, setTitle] = useState("");
    const [todoItem, setTodoItem] = useState([]); 
    const [date, setDate] = useState(new Date());

    console.log(todoItem,"dddddddddddddddd");
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!title == "") {
        let todo = {
          id: Math.random(),
          todo: title,
          completed: false,
          dates: date.toLocaleDateString(),
        };
        setTodoItem([...todoItem, todo]);
      }
      setTitle(""); 
    };

    const handleChange = (event) => {
        setTitle(event.target.value);        
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

    return(
        <div>
        <Card className={classes.cards}>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className={classes.root}
              noValidate
              autoComplete="off"
            >
            <TodoInput handleChange={(event) => {handleChange(event)}}/>
            <DatePicker  value={date} onChange={(date) => setDate(date)}/>
            <SubmitButton  />
            </form>
          </CardContent> 
        </Card>
        </div>
    )
}
export default TodoForm;