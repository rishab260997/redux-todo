import React, { useState, useEffect } from "react";
// import { addTodos } from "../redux/action/index";

function useTodoFormAction({
  title,
  date,
  todoItem,
  buttonStatus,
  onSubmit,
  todoListItems,
}) {
  console.log(todoListItems, "ttttttt");
  const [formState, changeFormStates] = useState({
    title: "",
    date: new Date(),
    todoItem: [],
    showTodoItem: [],
    buttonStatus: "",
  });

  console.log(formState, "ppppppppppppp");

  useEffect(() => {
    changeFormStates({ ...formState, showTodoItem: todoListItems});
  },[formState.todoItem]);

  useEffect(() =>{
    changeFormStates({...formState, todoItem: todoListItems })
  },[todoListItems])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.title == "") {
      let todo = {
        id: Math.random(),
        todo: formState.title,
        completed: false,
        dates: formState.date.toLocaleDateString(),
      };
      onSubmit(todo);
    }
  };

  const handleDeleteListItem = (id) => {
    let todoItems = [...formState.todoItem];
    todoItems.splice(id, 1);
    changeFormStates({ ...formState, todoItem: todoItems });
  };

  const handleChecked = (id) => {
    let todoItems = formState.todoItem.map((val) => {
      if (val.id === id) {
        val.completed = !val.completed;
      }
      return val;
    });
    changeFormStates({ ...formState, todoItem: todoItems });
  };

  const handleDateChange = (value, e) => {
    changeFormStates({ ...formState, date: value });
  };
  const handleChange = (event) => {
    changeFormStates({ ...formState, title: event.target.value });
  };
  const handleClickCompleted = () => {
    changeFormStates({ ...formState, buttonStatus: "completed" });
    var completeds = formState.todoItem.filter((val) => val.completed === true);
    changeFormStates({ ...formState, showTodoItem: completeds });
  };
  const handleClickActiveList = () => {
    changeFormStates({ ...formState, buttonStatus: "activeList" });
    var completeds = formState.todoItem.filter(
      (val) => val.completed === false
    );
    changeFormStates({ ...formState, showTodoItem: completeds });
  };

  const handleClickAll = () => {
    changeFormStates({ ...formState, buttonStatus: "all" });
    var completeds = formState.todoItem.filter((val) => val);
    changeFormStates({ ...formState, showTodoItem: completeds });
  };

  const handleAscSort = () => {
    changeFormStates({ ...formState, buttonStatus: "asc" });

    var completeds = formState.todoItem
      .sort(
        (a, b) =>
          Date.parse(new Date(a.dates.split("/").reverse().join("-"))) -
          Date.parse(new Date(b.dates.split("/").reverse().join("-")))
      )
      .filter((val) => val);
    changeFormStates({ ...formState, showTodoItem: completeds });
  };

  const handleDscSort = () => {
    changeFormStates({ ...formState, buttonStatus: "dsc" });
    var completeds = formState.todoItem
      .sort(
        (a, b) =>
          Date.parse(new Date(b.dates.split("/").reverse().join("-"))) -
          Date.parse(new Date(a.dates.split("/").reverse().join("-")))
      )
      .filter((val) => val);
    changeFormStates({ ...formState, showTodoItem: completeds });
  };
  return {
    formState,
    handleSubmit,
    handleDeleteListItem,
    handleChecked,
    handleDateChange,
    handleChange,
    handleClickCompleted,
    handleClickActiveList,
    handleClickAll,
    handleAscSort,
    handleDscSort,
  };
}

export default useTodoFormAction;
