import * as constant from "../actionType/actionType";

function deleteReducer(todoList = [], action) {
  if (action.type === constant.DELETE_TODO) {
    return action.payload.showTodoItem.filter((id) => {
      let todoItems = action.payload.showTodoItem;
      todoItems.splice(action.payload.id, 1);
    });
  } else {
    return todoList;
  }
}
export default deleteReducer;
