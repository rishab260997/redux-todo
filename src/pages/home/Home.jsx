import React, { useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import TodoForm from "../../component/form/Form";
import TodoList from "../../component/todoList/homeTodoList/HomeTodoList";
import useTodoFormAction from "../../customHook/UseTodoFormAction";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import {addTodos } from '../../redux/action/index';


function Home(props) {
  const {
    formState: formState,
    handleSubmit: handleSubmit,
    handleDeleteListItem: handleDeleteListItem,
    handleChecked: handleChecked,
    handleDateChange: handleDateChange,
    handleChange: handleChange,
    handleClickCompleted: handleClickCompleted,
    handleClickActiveList: handleClickActiveList,
    handleClickAll: handleClickAll,
    handleAscSort: handleAscSort,
    handleDscSort: handleDscSort,
  } = useTodoFormAction({
    title: "",
    date: new Date(),
    todoItem: [],
    buttonStatus: "",
    onSubmit :  () => {}
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

const mapStateToProps = (state) => {
  return {
     
  };
};

const mapDispatchToProps = (dispatch) => ({
  addTodos: data => dispatch(addTodos(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

// const mapStateToProps = (state) => {
//   return {
//     todoReducer: state.todoReducer
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   addTodos: data => dispatch(addTodos(data)),
// });

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

// export default Home;
