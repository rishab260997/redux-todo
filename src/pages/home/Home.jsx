import React, { useState, useEffect } from "react";
import Navbar from "../../component/navbar/Navbar";
import TodoForm from "../../component/form/Form";
import TodoList from "../../component/todoList/homeTodoList/HomeTodoList";
import useTodoFormAction from "../../customHook/UseTodoFormAction";
import { withRouter, Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { addTodos, deleteTodos,checkTodos } from "../../redux/action/index";

function Home(props) {
  const dispatch = useDispatch();
  const {
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
  } = useTodoFormAction({
    title: "",
    date: new Date(),
    todoItem: [],
    buttonStatus: "",
    onSubmit: (todo) => {
      dispatch(addTodos(todo));
    },
    todoListItems: useSelector((state) => state.AddReducerstatus),
    handleDeleteList: (showTodoItem, id) => {
      dispatch(deleteTodos({ showTodoItem, id }));
    },
    deletedListItems: useSelector((state) => state.DeleteReducerStatus),
    handleCheckedDispatch: (showTodoItem, id) =>{dispatch(checkTodos({ showTodoItem ,id }));
  },
  checkedListItems: useSelector((state)=> state.CheckedReducerStatus)
  });

  return (
    <div>
      <Navbar />
      <TodoForm
        handleChange={(event) => {
          handleChange(event);
        }}
        handleSubmit={(e) => {
          handleSubmit(e);
        }}
        handleDateChange={(value, e) => handleDateChange(value, e)}
        formState={formState}
      />
      <TodoList
        formState={formState}
        handleClickCompleted={handleClickCompleted}
        handleClickActiveList={handleClickActiveList}
        handleClickAll={handleClickAll}
        handleAscSort={handleAscSort}
        handleDscSort={handleDscSort}
        handleChecked={(id) => handleChecked(id)}
        handleDeleteListItem={(id) => handleDeleteListItem(id)}
      />
    </div>
  );
}

export default Home;
