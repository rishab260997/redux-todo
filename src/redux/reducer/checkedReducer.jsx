import * as constant from "../actionType/actionType";

function checkedReducer(todoList = [], action) {

  if (action.type === constant.CHECK_TODO) {
    return action.payload.showTodoItem.filter((val) => {
      if (val.id === action.payload.id) {
        val.completed = !val.completed;
      }
      return val;
    });
  } else {
    return todoList;
  }
}
export default checkedReducer;
