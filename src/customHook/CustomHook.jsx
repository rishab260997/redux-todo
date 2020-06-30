import React, { useState } from "react";

function useTodoFormAction(title, date, todoItem, buttonStatus) {
  const [formState, changeFormStates] = useState({
    title: "",
    date: new Date(),
    todoItem: [],
    buttonStatus: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.title == "") {
      let todo = {
        id: Math.random(),
        todo: formState.title,
        completed: false,
        dates: formState.date.toLocaleDateString(),
      };
      changeFormStates({
        ...formState,
        todoItem: [...formState.todoItem, todo],
      });
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
  };
  const handleClickActiveList = () => {
    changeFormStates({ ...formState, buttonStatus: "activeList" });
  };
  const handleClickAll = () => {
    changeFormStates({ ...formState, buttonStatus: "all" });
  };
  const handleAscSort = () => {
    changeFormStates({ ...formState, buttonStatus: "asc" });
  };
  const handleDscSort = () => {
    changeFormStates({ ...formState, buttonStatus: "dsc" });
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
