import React ,{useState} from 'react';
import CompletedButton from '../../filterButton/completed/Completed';
import CompletedTodoList from '../completedTodoList/CompletedTodoList';
import { Button,  Checkbox, AppBar, Toolbar, IconButton, Typography, CardContent, Card,} from "@material-ui/core";


function TodoList (props) {
    const [buttonStatus, setButtonStatus] = useState("");


    const handleClickCompleted = () => {
        setButtonStatus("completed");
      };
   
      const handleDeleteListItem = (id) => {
        let todoItems = [...props.formState.todoItem];
        todoItems.splice(id, 1);
        // setTodoItem(todoItems);
        changeFormStates({
            ...props.formState,
            todoItem: todoItems
          });
      };
    
  const handleChecked = (id, name, checkedValues) => {
    let todoItems = props.formState.todoItem.map((val) => {
      if (val.id === id) {
        val.completed = !val.completed;
      }
      return val;
    });
    changeFormStates({
        ...props.formState,
        todoItem: todoItems
      });
    }
  }

    return(
        <div>
      { buttonStatus == "completed" ?
     <CompletedTodoList handleChecked={handleChecked} handleDeleteListItem={handleDeleteListItem}/>
        : props.formState.todoItem.map((val, key) => {
            return (
              <div style={{ backgroundColor: "#66a3ff", marginTop: "10px" }}>
              <AppBar position="static">
                <Toolbar>
                <Checkbox
                  className={classes.title}
                  checked={val.checked}
                  type="checkbox"
                  id={val.id}
                  value={val.todo}
                  name="title"
                  onClick={() => handleChecked(val.id, val.todo, val.completed)}
                  inputProps={{ "aria-label": "checkbox with default color" }}
                />
                <Typography variant="h6" className={classes.title}  style={{ textDecoration: val.completed == true ? "line-through" : "", }}> {val.todo}</Typography>
                <Typography variant="h6" className={classes.title}> {val.dates}</Typography>
                <Button  onClick={() => handleDeleteListItem(key)}  type="submit" size="small" variant="contained" color="secondary">Delete</Button>
                </Toolbar>
              </AppBar>
              </div>
            );
          })}
  

        <CompletedButton handleClickCompleted={handleClickCompleted}/>
        </div>
    )
}
export default TodoList;
