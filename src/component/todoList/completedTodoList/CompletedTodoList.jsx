import React from "react";
import { Button,  Checkbox, AppBar, Toolbar, IconButton, Typography, CardContent, Card,} from "@material-ui/core";

function CompletedTodoList(props) {

  return (
    <div>
      {todoItem.map((val, key) => {
        return val.completed === true ? (
          <div style={{ backgroundColor: "#66a3ff", marginTop: "10px" }}>
            <AppBar position="static">
              <Toolbar>
                <Checkbox
                  className={classes.title}
                  checked={val.checked}
                  type="checkbox"
                  id={val.id}
                  value={val.todo}
                  name="title"
                  onClick={() => handleChecked(val.id, val.todo, val.completed)}
                  inputProps={{ "aria-label": "checkbox with default color" }}
                />
                <Typography
                  variant="h6"
                  className={classes.title}
                  style={{
                    textDecoration: val.completed == true ? "line-through" : "",
                  }}
                >
                  {" "}
                  {val.todo}
                </Typography>
                <Typography variant="h6" className={classes.title}>
                  {" "}
                  {val.dates}
                </Typography>
                <Button
                  className={classes.title}
                  onClick={() => handleDeleteListItem(key)}
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
export default CompletedTodoList;
