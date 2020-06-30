import React, { useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import TodoForm from "../../component/form/Form";
import TodoList from "../../component/todoList/homeTodoList/HomeTodoList";
import useTodoFormAction from  '../../customHook/CustomHook';

function Home() {


  const {
    formState : formState,
    handleSubmit : handleSubmit,
    handleDeleteListItem : handleDeleteListItem,
    handleChecked : handleChecked,
    handleDateChange : handleDateChange,
    handleChange :handleChange,
    handleClickCompleted :handleClickCompleted,
    handleClickActiveList : handleClickActiveList,
    handleClickAll : handleClickAll,
    handleAscSort :handleAscSort,
    handleDscSort : handleDscSort
  }
   = useTodoFormAction({
    title: "",
    date: new Date(),
    todoItem: [],
    buttonStatus: "",
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
