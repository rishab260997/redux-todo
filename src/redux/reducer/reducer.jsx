import * as constant from "../actionType/actionType";

const initialState = [{
  id: null,
  todo: "",
  completed: false,
  dates: "",
}];
 
let todoList =[];
export function todoReducer(todoList = initialState, action) {
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
  }
}
export default todoReducer;