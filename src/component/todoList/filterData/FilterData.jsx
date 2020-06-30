import React from "react";
import {
  Button,
  Checkbox,
  Typography,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";

function FilterDate(props) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableRow index={props.index}>
            <TableCell component="th" scope="row">
              {props.index + 1}
            </TableCell>
            <TableCell align="right">
              <Checkbox
                checked={props.val.completed}
                type="checkbox"
                id={props.val.id}
                value={props.val.todo}
                name="title"
                onClick={() => props.handleChecked(props.val.id)}
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
                    props.val.completed == true ? "line-through" : "",
                }}
              >
                {props.val.todo}
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6"> {props.val.dates}</Typography>
            </TableCell>
            <TableCell align="right">
              <Button
                onClick={() => props.handleDeleteListItem(props.val.id)}
                type="submit"
                size="small"
                variant="contained"
                color="secondary"
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </div>
  );
}
export default FilterDate;
