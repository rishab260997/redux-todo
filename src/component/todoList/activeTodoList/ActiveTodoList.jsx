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
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function ActiveTodoList(props) {
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

  var result = Object.keys(props.val).map(function (key) {
    return [props.val[key]];
  });

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableBody>
            {result.map((value, key) => {
              return (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {key + 1}
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox
                      checked={result[2]}
                      type="checkbox"
                      id={result[0]}
                      value={result[1]}
                      name="title"
                      onClick={() => props.handleChecked(result[0])}
                      inputProps={{
                        "aria-label": "checkbox with default color",
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="h6"
                      style={{
                        textDecoration: result[2] == true ? "line-through" : "",
                      }}
                    >
                      {result[1]}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6"> {result[3]}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => props.handleDeleteListItem(result[0])}
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
    </div>
  );
}
export default ActiveTodoList;
