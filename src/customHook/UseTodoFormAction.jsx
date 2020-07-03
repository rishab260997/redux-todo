import React, { useState, useEffect } from "react";
// import { addTodos } from "../redux/action/index";

function useTodoFormAction({
  title,
  date,
  todoItem,
  buttonStatus,
  onSubmit,
  todoListItems,
  handleDeleteList,
  deletedListItems,
  handleCheckedDispatch,
  checkedListItems,
  handleAllDispatch,
  filterTodosList
}) {
  const [formState, changeFormStates] = useState({
    title: "",
    date: new Date(),
    todoItem: [],
    showTodoItem: [],
    buttonStatus: "",
  });

  useEffect(() => {
    changeFormStates({ ...formState, showTodoItem: todoListItems });
  }, [formState.todoItem]);
  console.log(formState.showTodoItem,filterTodosList, "ttttttt");

  useEffect(() => {
    changeFormStates({ ...formState, todoItem: todoListItems });
  }, [todoListItems]);

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
      // changeFormStates({ ...formState, todoItem: todoListItems });
    }
  };

  const handleDeleteListItem = (id) => {
    // let todoItems = [...formState.todoItem];
    // todoItems.splice(id, 1);
    handleDeleteList(formState.showTodoItem, id);
    // changeFormStates({ ...formState, todoItem: deletedListItems });
  };

  const handleChecked = (id) => {
    // let todoItems = formState.todoItem.map((val) => {
    //   if (val.id === id) {
    //     val.completed = !val.completed;
    //   }
    //   return val;
    // });
    handleCheckedDispatch(formState.showTodoItem, id);
    changeFormStates({ ...formState, todoItem: checkedListItems });
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
    // var completeds = formState.todoItem.filter((val) => val);
    handleAllDispatch(formState.todoItem)
    changeFormStates({ ...formState, showTodoItem: filterTodosList });
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
