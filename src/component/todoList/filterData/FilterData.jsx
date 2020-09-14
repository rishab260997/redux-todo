import React from "react";
import FilterButton from "../../filterButton/AllButton";
import {
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
      {  props.formState.showTodoItem !== 0 ?
         props.formState.showTodoItem.map((val, key) => {
            return (
              <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableRow index={props.index}>
                    <TableCell component="th" scope="row">
                      {key + 1}
                    </TableCell>
                    <TableCell align="right">
                      <Checkbox
                        checked={val.completed}
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
                            val.completed === true ? "line-through" : "",
                        }}
                      >
                        {val.todo}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="h6"> {val.dates}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <FilterButton
                        handleClickAll={() =>
                          props.handleDeleteListItem(val.id)
                        }
                        ButtonTypes={"Delete"}
                        colors={"secondary"}
                      />
                    </TableCell>
                  </TableRow>
                </Table>
              </TableContainer>
            );
          })
        : null
        }
    </div>
  );
}
export default FilterDate;
