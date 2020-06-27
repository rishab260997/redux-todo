import React from "react";
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

function DscTodoList(props) {
  return (
    <div>
      {props.formState.todoItem
        .sort(
          (a, b) =>
            Date.parse(new Date(b.dates.split("/").reverse().join("-"))) -
            Date.parse(new Date(a.dates.split("/").reverse().join("-")))
        )
        .map((val, key) => {
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
                  <Button onClick={() => props.handleDeleteListItem(key)}>
                    X
                  </Button>
                </Toolbar>
              </AppBar>
            </div>
          );
        })}
    </div>
  );
}
export default DscTodoList;
