import * as constant from "../actionType/actionType";


let todoList = [];
function addReducer(todoList = [], action) {
  if (action.type === constant.ADD_TODO) {
    return [
      ...todoList,
      {
        id: action.payload.id,
        todo: action.payload.todo,
        completed: action.payload.completed,
        dates: action.payload.dates,
      },
    ];
  } else if (action.type === constant.DELETE_TODO) {
    return action.payload.showTodoItem.filter((val) => {
      if (val.id == action.payload.id) {
      return false
      }
      return true
      })
    // return action.payload.showTodoItem.filter((val, key) => {
    //   console.log(action.payload.id, val.id,key, "kkkkkkkk");
    //   let todoItems = action.payload.showTodoItem;
    //   todoItems.splice(action.payload.id, 1);
    // });
  } else if (action.type === constant.CHECK_TODO) {
    return action.payload.showTodoItem.filter((val) => {
      if (val.id === action.payload.id) {
        val.completed = !val.completed;
      }
      return val;
    });
  }
  else {
    return todoList;
  }
}
export default addReducer;
