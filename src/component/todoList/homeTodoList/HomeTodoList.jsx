import React, { useState } from "react";
import CompletedButton from "../../filterButton/completed/Completed";
import CompletedTodoList from "../completedTodoList/CompletedTodoList";
import ActiveTodoList from "../activeTodoList/ActiveTodoList";
import AllTodoList from "../allTodoList/AllTodoList";
import AscTodoList from "../ascTodoList/AscTodoList";
import DscTodoList from "../dscTodoList/DscTodoList";
import {
  Button,
  Checkbox,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CardContent,
  Card,
} from "@material-ui/core";
import DscButton from "../../filterButton/dscButton/dscButton";
import AscButton from "../../filterButton/ascButton/AscButton";
import AllButton from "../../filterButton/allButton/AllButton";
import ActiveListButton from "../../filterButton/activeList/ActiveList";
import { makeStyles } from "@material-ui/core/styles";

function TodoList(props) {
  const useStyles = makeStyles((theme) => ({
    todolistItems: {
      marginTop: "20px",
    },
    todolistButtons: {
      marginTop: "20px",
    },
    todoButtons: {
      paddingLeft: "20px",
      marginLeft: "20px",
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.todolistItems}>
      {props.formState.buttonStatus == "all" ? (
        <AllTodoList
          formStates={props.formState}
          handleChecked={(id) => props.handleChecked(id)}
          handleDeleteListItem={(id) => props.handleDeleteListItem(id)}
        />
      ) : props.formState.buttonStatus == "completed" ? (
        <CompletedTodoList
          formStates={props.formState}
          handleChecked={(id) => props.handleChecked(id)}
          handleDeleteListItem={(id) => props.handleDeleteListItem(id)}
        />
      ) : props.formState.buttonStatus == "activeList" ? (
        <ActiveTodoList
          formStates={props.formState}
          handleChecked={(id) => props.handleChecked(id)}
          handleDeleteListItem={(id) => props.handleDeleteListItem(id)}
        />
      ) : props.formState.buttonStatus == "asc" ? (
        <AscTodoList
          formStates={props.formState}
          handleChecked={(id) => props.handleChecked(id)}
          handleDeleteListItem={(id) => props.handleDeleteListItem(id)}
        />
      ) : props.formState.buttonStatus == "dsc" ? (
        <DscTodoList
          formStates={props.formState}
          handleChecked={(id) => props.handleChecked(id)}
          handleDeleteListItem={(id) => props.handleDeleteListItem(id)}
        />
      ) : (
        props.formState.todoItem.map((val, key) => {
          return (
            <div style={{ backgroundColor: "#66a3ff", marginTop: "10px" }}>
              <AppBar position="static">
                <Toolbar>
                  <Checkbox
                    checked={val.checked}
                    type="checkbox"
                    id={val.id}
                    value={val.todo}
                    name="title"
                    onClick={() => props.handleChecked(val.id)}
                    inputProps={{ "aria-label": "checkbox with default color" }}
                  />
                  <Typography
                    variant="h6"
                    style={{
                      textDecoration:
                        val.completed == true ? "line-through" : "",
                    }}
                  >
                    {" "}
                    {val.todo}
                  </Typography>
                  <Typography variant="h6"> {val.dates}</Typography>
                  <Button
                    onClick={() => props.handleDeleteListItem(key)}
                    type="submit"
                    size="small"
                    variant="contained"
                    color="secondary"
                  >
                    Delete
                  </Button>
                </Toolbar>
              </AppBar>
            </div>
          );
        })
      )}
      <div className={classes.todolistButtons}>
        <AllButton handleClickAll={props.handleClickAll} />
        <CompletedButton handleClickCompleted={props.handleClickCompleted} />
        <ActiveListButton handleClickActiveList={props.handleClickActiveList} />
        <DscButton handleAscSort={props.handleAscSort} />
        <AscButton handleDscSort={props.handleDscSort} />
      </div>
    </div>
  );
}
export default TodoList;
