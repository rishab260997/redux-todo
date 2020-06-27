import React from "react";
import Navbar from "../../component/navbar/Navbar";
import TodoForm from "../../component/form/Form";
import TodoList from "../../component/todoList/homeTodoList/HomeTodoList";

function Home() {
  const [formState, changeFormStates] = useState({
    title: "",
    date: new Date(),
    todoItem: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!props.formState.title == "") {
      let todo = {
        id: Math.random(),
        todo: props.formState.title,
        completed: false,
        dates: props.formState.date.toLocaleDateString(),
      };
      props.changeFormStates({
        ...props.formState,
        todoItem: [...props.formState.todoItem, todo],
      });
    }
    changeFormStates({ ...props.formState, title: "" });
  };

  const handleChange = (event) => {
    changeFormStates({ ...props.formState, title: event.target.value });
  };
  return (
    <div>
      <Navbar />
      <TodoForm
        formState={(e) => {
          formState(e);
        }}
        handleChange={(event) => {
          handleChange(event);
        }}
        handleSubmit={(e) => {
          handleSubmit(e);
        }}
      />
      <TodoList formState={formState} />
    </div>
  );
}

export default Home;
