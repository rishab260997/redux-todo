import * as constant from "../actionType/actionType";

// const initialState = {
//   id: null,
//   todo: "",
//   completed: false,
//   dates: "",
// };
 
let todoList =[];
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
  }else{
    return todoList
  }
}
export default addReducer;