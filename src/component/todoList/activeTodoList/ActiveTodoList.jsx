import React from "react";
import { TableBody, Table, TableContainer, Paper } from "@material-ui/core";
import FilterDate from "../filterData/FilterData";

function ActiveTodoList(props) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableBody>
            {props.formState.buttonStatus == "all"
              ? props.formState.todoItem.map((val, key) => {
                  return (
                    <FilterDate
                      val={val}
                      index={key}
                      handleChecked={(id) => props.handleChecked(id)}
                      handleDeleteListItem={(id) =>
                        props.handleDeleteListItem(id)
                      }
                    />
                  );
                })
              : props.formState.buttonStatus == "completed"
              ? props.formState.todoItem.map((val, key) => {
                  return val.completed === true ? (
                    <FilterDate
                      val={val}
                      index={key}
                      handleChecked={(id) => props.handleChecked(id)}
                      handleDeleteListItem={(id) =>
                        props.handleDeleteListItem(id)
                      }
                    />
                  ) : null;
                })
              : props.formState.buttonStatus == "activeList"
              ? props.formState.todoItem.map((val, key) => {
                  return val.completed === false ? (
                    <FilterDate
                      val={val}
                      index={key}
                      handleChecked={(id) => props.handleChecked(id)}
                      handleDeleteListItem={(id) =>
                        props.handleDeleteListItem(id)
                      }
                    />
                  ) : null;
                })
              : props.formState.buttonStatus == "asc"
              ? props.formState.todoItem
                  .sort(
                    (a, b) =>
                      Date.parse(
                        new Date(a.dates.split("/").reverse().join("-"))
                      ) -
                      Date.parse(
                        new Date(b.dates.split("/").reverse().join("-"))
                      )
                  )
                  .map((val, key) => {
                    return (
                      <FilterDate
                        val={val}
                        index={key}
                        handleChecked={(id) => props.handleChecked(id)}
                        handleDeleteListItem={(id) =>
                          props.handleDeleteListItem(id)
                        }
                      />
                    );
                  })
              : props.formState.buttonStatus == "dsc"
              ? props.formState.todoItem
                  .sort(
                    (a, b) =>
                      Date.parse(
                        new Date(b.dates.split("/").reverse().join("-"))
                      ) -
                      Date.parse(
                        new Date(a.dates.split("/").reverse().join("-"))
                      )
                  )
                  .map((val, key) => {
                    return (
                      <FilterDate
                        val={val}
                        index={key}
                        handleChecked={(id) => props.handleChecked(id)}
                        handleDeleteListItem={(id) =>
                          props.handleDeleteListItem(id)
                        }
                      />
                    );
                  })
              : props.formState.todoItem.map((val, key) => {
                  return (
                    <FilterDate
                      val={val}
                      index={key}
                      handleChecked={(id) => props.handleChecked(id)}
                      handleDeleteListItem={(id) =>
                        props.handleDeleteListItem(id)
                      }
                    />
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default ActiveTodoList;
