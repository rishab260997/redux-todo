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

function ActiveTodoList(props) {
  return (
    <div>
      {props.formStates.todoItem.map((val, key) => {
        return val.completed === false ? (
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
                    textDecoration: val.completed == true ? "line-through" : "",
                  }}
                >
                  {" "}
                  {val.todo}
                </Typography>
                <Typography variant="h6"> {val.dates}</Typography>
                <Button
                  onClick={() => props.handleDeleteListItem(key)}
                >
                  X
                </Button>
              </Toolbar>
            </AppBar>
          </div>
        ) : null;
      })}
    </div>
  );
}
export default ActiveTodoList;
