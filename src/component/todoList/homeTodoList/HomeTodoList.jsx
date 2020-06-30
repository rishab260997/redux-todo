import React, { useState } from "react";
import FilterButton from "../../filterButton/AllButton";
import { makeStyles } from "@material-ui/core/styles";
import FilterDate from "../filterData/FilterData";

function TodoList(props) {
  const useStyles = makeStyles((theme) => ({
    todolistItems: {
      marginTop: "20px",
    },
    todolistButtons: {
      marginTop: "20px",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.todolistItems}>
      <FilterDate
        formState={props.formState}
        handleChecked={(id) => props.handleChecked(id)}
        handleDeleteListItem={(id) => props.handleDeleteListItem(id)}
      />
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
