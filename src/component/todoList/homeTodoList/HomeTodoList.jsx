import React, { useState } from "react";
import ActiveTodoList from "../activeTodoList/ActiveTodoList";
import {
  Button,
  Checkbox,
  Typography,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import FilterButton from "../../filterButton/AllButton";
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
      }
      {props.formState.buttonStatus == "all" ? (
        props.formState.todoItem.map((val, key) => {
          return (
            <div>
              <ActiveTodoList
                val={val}
                index={key}
                handleChecked={(id) => props.handleChecked(id)}
                handleDeleteListItem={(id) => props.handleDeleteListItem(id)}
              />
            </div>
          );
        })
      ) : props.formState.buttonStatus == "completed" ? (
        props.formState.todoItem.map((val, key) => {
          return val.completed === true ? (
            <div>
              <ActiveTodoList
                val={val}
                index={key}
                handleChecked={(id) => props.handleChecked(id)}
                handleDeleteListItem={(id) => props.handleDeleteListItem(id)}
              />
            </div>
          ) : null;
        })
      ) : props.formState.buttonStatus == "activeList" ? (
        props.formState.todoItem.map((val, key) => {
          return val.completed === false ? (
            <div>
              <ActiveTodoList
                val={val}
                index={key}
                handleChecked={(id) => props.handleChecked(id)}
                handleDeleteListItem={(id) => props.handleDeleteListItem(id)}
              />
            </div>
          ) : null;
        })
      ) : props.formState.buttonStatus == "asc" ? (
        props.formState.todoItem
          .sort(
            (a, b) =>
              Date.parse(new Date(a.dates.split("/").reverse().join("-"))) -
              Date.parse(new Date(b.dates.split("/").reverse().join("-")))
          )
          .map((val, key) => {
            return (
              <div>
                <ActiveTodoList
                  val={val}
                  index={key}
                  handleChecked={(id) => props.handleChecked(id)}
                  handleDeleteListItem={(id) => props.handleDeleteListItem(id)}
                />
              </div>
            );
          })
      ) : props.formState.buttonStatus == "dsc" ? (
        props.formState.todoItem
          .sort(
            (a, b) =>
              Date.parse(new Date(b.dates.split("/").reverse().join("-"))) -
              Date.parse(new Date(a.dates.split("/").reverse().join("-")))
          )
          .map((val, key) => {
            return (
              <div>
                <ActiveTodoList
                  val={val}
                  index={key}
                  handleChecked={(id) => props.handleChecked(id)}
                  handleDeleteListItem={(id) => props.handleDeleteListItem(id)}
                />
              </div>
            );
          })
      ) : (
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Serial No</TableCell>
                <TableCell align="right">CheckBox </TableCell>
                <TableCell align="right">Input Text</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Button</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.formState.todoItem.map((val, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell component="th" scope="row">
                      {key + 1}
                    </TableCell>
                    <TableCell align="right">
                      <Checkbox
                        checked={val.checked}
                        type="checkbox"
                        id={val.id}
                        value={val.todo}
                        name="title"
                        onClick={() => props.handleChecked(val.id)}
                        inputProps={{
                          "aria-label": "checkbox with default color",
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
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
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="h6"> {val.dates}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => props.handleDeleteListItem(key)}
                        type="submit"
                        size="small"
                        variant="contained"
                        color="secondary"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <div className={classes.todolistButtons}>
        <FilterButton
          ButtonTypes={"All List"}
          handleClickAll={props.handleClickAll}
        />
        <FilterButton
          ButtonTypes={"Completed"}
          handleClickAll={props.handleClickCompleted}
        />
        <FilterButton
          ButtonTypes={"ActiveList"}
          handleClickAll={props.handleClickActiveList}
        />
        <FilterButton
          ButtonTypes={"Asc"}
          handleClickAll={props.handleAscSort}
        />
        <FilterButton
          ButtonTypes={"Dsc"}
          handleClickAll={props.handleDscSort}
        />
      </div>
    </div>
  );
}
export default TodoList;
